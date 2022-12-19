import React,{Component} from "react";
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

        this.onSubmit = this.onSubmit.bind(this);


    }

    

    async  onSubmit(e) {
        e.preventDefault();



  
   
       console.log(this.state)
    }

        render() {
            const newQuery ={
                Subject:this.props.QuizID
            }
            axios.post('http://localhost:8000/Quiz/getQuiz',newQuery)
            .then(res=> this.setState({Question:res.data}));
            return (
                <div style={{marginTop: 20}}>

                    <button  onClick={this.onSubmit}>get questions</button>
                    {this.state.Question.map((question)=>(
                
                       <h1>{question.Question}</h1>


           
           
        

                                        

             ))}
                        </div>

                
            )
        }

}
