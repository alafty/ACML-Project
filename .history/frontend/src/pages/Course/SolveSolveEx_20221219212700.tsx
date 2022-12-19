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
    checkAnswer (selected : string ,theQuestion : questionBankModel) {
       // const selected = (document.querySelector('input[name="choices"]:checked') as HTMLInputElement).value;
        console.log(selected);
        console.log(theQuestion.Answer)
        const rightAnswer= theQuestion.Answer
        if (selected==rightAnswer) {
            this.score++
        }
        console.log(this.score);
        if (this.currentQuestion<this.state.Question.length)
            this.currentQuestion++
            console.log(this.currentQuestion)

    }
        render() {
          
            return (
             
                <div style={{marginTop: 20}}>
                    
                    
                        
                             <div>    
                             <h1> Question {this.currentQuestion+1} :</h1>
                             <h2>{this.state.Question[this.currentQuestion].Question}</h2>
                             <ul>
                                <li value={this.state.Question[this.currentQuestion].Choice1}   onChange={() => this.checkAnswer(this.state.Question[this.currentQuestion].Choice1,this.state.Question[this.currentQuestion])} /> 
                                                {this.state.Question[this.currentQuestion].Choice1} 
                            
                            <br />
                    
                                <li value={this.state.Question[this.currentQuestion].Choice2} onChange={() => this.checkAnswer(this.state.Question[this.currentQuestion].Choice2,this.state.Question[this.currentQuestion])}  />
                                                {this.state.Question[this.currentQuestion].Choice2}
                            
                            <br />
                            
                                <li value={this.state.Question[this.currentQuestion].Choice3}  onChange={() => this.checkAnswer(this.state.Question[this.currentQuestion].Choice3,this.state.Question[this.currentQuestion])}  />
                                                {this.state.Question[this.currentQuestion].Choice3}
                        
                            <br />
                            
                                <li value={this.state.Question[this.currentQuestion].Choice4}  onChange={() => this.checkAnswer(this.state.Question[this.currentQuestion].Choice4,this.state.Question[this.currentQuestion])} />
                                                {this.state.Question[this.currentQuestion].Choice4}
                                                </ul>
                            </div>


                </div>
            )
        }

}
