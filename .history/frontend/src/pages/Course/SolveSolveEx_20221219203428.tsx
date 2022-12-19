import React,{ChangeEvent, Component, useState} from "react";
import axios from 'axios';
import questionBankModel from "../Models/questionBank.tsx";

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
     currentQuestion=0;
    checkAnswer (theQuestion : questionBankModel) {
        const selected = (document.querySelector('input[name="choices"]:checked') as HTMLInputElement).value;

        console.log(selected);
        console.log(theQuestion.question.Answer)
        const rightAnswer= theQuestion.question.Answer
        if (selected==rightAnswer) {
            this.score++
        }
        console.log(this.score);
        this.currentQuestion++

    }
        render() {
          
            return (
             
                <div style={{marginTop: 20}}>
                    <h6>{}</h6>
                    
                        
                             <div>    
                             <h1> Question {this.currentQuestion+1} :</h1>
                             <h2>{this.state.Question[this.currentQuestion].Question}</h2>
                             <label>
                                <input type="radio" value={this.state.Question[this.currentQuestion].Choice1} name="choices"  onChange={() => this.checkAnswer(this.state.Question[this.currentQuestion])} /> 
                                                {this.state.Question[this.currentQuestion].Choice1} 
                            </label>
                            <br />
                            <label>
                                <input type="radio" value={this.state.Question[this.currentQuestion].Choice2} name="choices" onChange={() => this.checkAnswer(this.state.Question[this.currentQuestion])}  />
                                                {this.state.Question[this.currentQuestion].Choice2}
                            </label>
                            <br />
                            <label>
                                <input type="radio" value={this.state.Question[this.currentQuestion].Choice3} name="choices" onChange={() => this.checkAnswer(this.state.Question[this.currentQuestion])}  />
                                                {this.state.Question[this.currentQuestion].Choice3}
                            </label>
                            <br />
                            <label>
                                <input type="radio" value={this.state.Question[this.currentQuestion].Choice4} name="choices" onChange={() => this.checkAnswer(this.state.Question[this.currentQuestion])} />
                                                {this.state.Question[this.currentQuestion].Choice4}
                            </label>
                            </div>


                </div>
            )
        }

}
