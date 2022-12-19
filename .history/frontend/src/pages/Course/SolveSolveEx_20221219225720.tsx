import React,{ChangeEvent, Component, useState} from "react";
import axios from 'axios';
import questionBankModel from "../Models/questionBank.tsx";

type State = {
    Question: [questionBankModel]
    score : Number
    currentQuestion : Number
    showScore : boolean
    showAnswers : boolean
    

   

}



    export default class extends Component<{QuizID}, State> {
         
    constructor(props: any) {
        super(props);


        this.state = {
            Question: [''],
            score :0,
            currentQuestion : 0,
            showScore : false ,
            showAnswers : false
            
            
            
        }
   
     


    }
   
    componentDidMount(){
        const newQuery ={
            Subject:this.props.QuizID
        }
        axios.post('http://localhost:8000/Quiz/getQuiz',newQuery)
        .then(res=> this.setState({Question:res.data}));
        
    }
     
     currentQuestion=0;
     newscore=0
     showscore = false
     showquestions = true
     totalscore=0
     //showAnswers=false
    showAnswer (){
        console.log("hiiiiiiiiii")
        this.setState({
            showAnswers: true
            
          });
        this.showscore=false
       

    }
    checkAnswer (selected : string ,theQuestion : questionBankModel) {
        console.log(selected);
        console.log(theQuestion.Answer)
        const rightAnswer= theQuestion.Answer
        this.totalscore+=theQuestion.Grade
        

        if (selected==rightAnswer) {
            this.newscore+=theQuestion.Grade
            this.setState({
                score: this.newscore
                
              });
        }
        console.log(this.state.score);
        if (this.currentQuestion<this.state.Question.length-1) {
            this.currentQuestion++
            this.setState({
                currentQuestion: this.currentQuestion
                
              });
             
        }
        else {
            this.showscore=true;
            this.showquestions=false
            this.setState({
                showScore: true
                
              });
                
        }
           

    }
        render() {
          
            return (
                
                    
                
             
                <div style={{marginTop: 20}}>
                    <div className="showAnswer" style={{ display: this.state.showAnswers? "block" : "none"}}>
                        {this.state.Question.map((question) => (
                            <h1>Question : {question.Question} <br />
                            Correct Answer : {question.Answer}</h1>
                            
                        
                        )

                        )

                        }
                    
                   </div>
                    
                     <div className="showResult" style={{ display: this.showscore? "block" : "none"}}>
                        <h1>you scored {this.newscore} out of {this.totalscore}</h1>
                        <button onClick={this.showAnswer}>show correct answers </button>
                    
                   </div>
                      
                             <div className="showQuestions" style={{ display: this.showquestions? "block" : "none"}}>    
                             <h1> Question {this.currentQuestion+1} :</h1>
                             <h2>{this.state.Question[this.currentQuestion].Question}</h2>
                             
                                <input type="radio" name="choices" value={this.state.Question[this.currentQuestion].Choice1}   onClick={() => this.checkAnswer(this.state.Question[this.currentQuestion].Choice1,this.state.Question[this.currentQuestion])} /> 
                                                {this.state.Question[this.currentQuestion].Choice1} 
                            
                            <br />
                    
                                <input type="radio" name="choices" value={this.state.Question[this.currentQuestion].Choice2} onClick={() => this.checkAnswer(this.state.Question[this.currentQuestion].Choice2,this.state.Question[this.currentQuestion])}  />
                                                {this.state.Question[this.currentQuestion].Choice2}
                            
                            <br />
                            
                                <input type="radio" name="choices" value={this.state.Question[this.currentQuestion].Choice3}  onClick={() => this.checkAnswer(this.state.Question[this.currentQuestion].Choice3,this.state.Question[this.currentQuestion])}  />
                                                {this.state.Question[this.currentQuestion].Choice3}
                        
                            <br />
                            
                                <input type="radio" name="choices" value={this.state.Question[this.currentQuestion].Choice4}  onClick={() => this.checkAnswer(this.state.Question[this.currentQuestion].Choice4,this.state.Question[this.currentQuestion])} />
                                                {this.state.Question[this.currentQuestion].Choice4}
                                            
                            </div>


                </div>
            )
        }

}
