import React,{ChangeEvent, Component, useState} from "react";
import axios from 'axios';
import questionBankModel from "../Models/questionBank.tsx";
import e from "express";
type State = {
    Question: [questionBankModel]
    

   

}



    export default class extends Component<{QuizID}, State> {
   
    constructor(props: any) {
        super(props);


        this.state = {
            Question: [''],
            
            
            
        }
   
     


    }
   
    componentDidMount(){
        const newQuery ={
            Subject:this.props.QuizID
        }
        axios.post('http://localhost:8000/Quiz/getQuiz',newQuery)
        .then(res=> this.setState({Question:res.data}));
        
    }
     score =0;
    checkAnswer (theQuestion : questionBankModel) {
        const selected = (document.querySelector('input[name="choices"]:checked') as HTMLInputElement).value;

        console.log(selected);
        console.log(theQuestion.question.Answer)
        const rightAnswer= theQuestion.question.Answer
        if (selected==rightAnswer) {
            this.score++
        }
        console.log(this.score);
    }
        render() {
          
            return (
             
                <div style={{marginTop: 20}}>

                    {this.state.Question.map((question)=>(
                        
                             <div>    
                             <h1> Question :</h1>
                             <h2>{question.Question}</h2>
                             <label>
                                <input type="radio" value={question.Choice1} name="choices"  onSubmit={() => this.checkAnswer({question})} /> 
                                                {question.Choice1} 
                            </label>
                            <br />
                            <label>
                                <input type="radio" value={question.Choice2} name="choices" onSubmit={() => this.checkAnswer({question})}  />
                                                {question.Choice2}
                            </label>
                            <br />
                            <label>
                                <input type="radio" value={question.Choice3} name="choices" onSubmit={() => this.checkAnswer({question})}  />
                                                {question.Choice3}
                            </label>
                            <br />
                            <label>
                                <input type="radio" value={question.Choice4} name="choices" onSubmit={() => this.checkAnswer({question})} />
                                                {question.Choice4}
                            </label>
                            </div>
                            

                                        

             ))}
                 <br />   <button type="submit"> Submit Answers</button>

                </div>
            )
        }

}
