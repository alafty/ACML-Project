import React,{Component, useState} from "react";
import axios from 'axios';
import questionBankModel from "../Models/questionBank.tsx";
type State = {
    Question: [questionBankModel]

}

    export default class Create extends Component<{QuizID}, State> {
   
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


        render() {
          
            return (
                <div style={{marginTop: 20}}>

                    {this.state.Question.map((question)=>(
                             <div>    
                             <h1>Question</h1>
                             <h2>{question.Question}</h2>
                             <label>
                                <input type="radio" value="option1" />
                                                {question.Choice1}
                            </label>
                            <label>
                                <input type="radio" value="option2"  />
                                                {question.Choice2}
                            </label>
                            <label>
                                <input type="radio" value="option3"  />
                                                {question.Choice3}
                            </label>
                            <label>
                                <input type="radio" value="option4"  />
                                                {question.Choice4}
                            </label>
                            </div>

                                        

             ))}

                </div>
            )
        }

}
