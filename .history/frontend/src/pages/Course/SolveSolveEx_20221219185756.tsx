import React,{ChangeEvent, Component, useState} from "react";
import axios from 'axios';
import questionBankModel from "../Models/questionBank.tsx";
import e from "express";
type State = {
    Question: [questionBankModel]
    score :Number

   

}



    export default class extends Component<{QuizID}, State> {
   
    constructor(props: any) {
        super(props);


        this.state = {
            Question: [''],
            score :0
            
        }
   
     


    }
   
    componentDidMount(){
        const newQuery ={
            Subject:this.props.QuizID
        }
        axios.post('http://localhost:8000/Quiz/getQuiz',newQuery)
        .then(res=> this.setState({Question:res.data}));
        
    }
    checkAnswer (theQuestion : questionBankModel) {
    
    }

        render() {
          
            return (
             
                <div style={{marginTop: 20}}>

                    {this.state.Question.map((question)=>(
                        
                             <div>    
                             <h1> Question :</h1>
                             <h2>{question.Question}</h2>
                             <label>
                                <input type="radio" value="choice1" name="choices"  onSelect={() => this.checkAnswer({question})} /> 
                                                {question.Choice1} 
                            </label>
                            <br />
                            <label>
                                <input type="radio" value="choice2" name="choices" />
                                                {question.Choice2}
                            </label>
                            <br />
                            <label>
                                <input type="radio" value="choice3" name="choices" />
                                                {question.Choice3}
                            </label>
                            <br />
                            <label>
                                <input type="radio" value="choice4" name="choices" />
                                                {question.Choice4}
                            </label>
                            </div>
                            

                                        

             ))}
                 <br />   <button> Submit Answers</button>

                </div>
            )
        }

}
