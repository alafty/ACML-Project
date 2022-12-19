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
                
            
                        <tr>
                        <th>Question</th> <br></br>
                        <th>choice 1</th> <br></br>
                        <th>choice 2</th> <br></br>
                        <th>choice 3</th> <br></br>
                        <th>choice 4</th> <br></br>
                        <th>Answer</th> <br></br>
                         
                    
           <td>{question.Question}</td> <br></br>
           <td>{question.Choice1}</td> <br></br>
           <td>{question.Choice2}</td> <br></br>
           <td>{question.Choice3}</td> <br></br>
           <td>{question.Choice4}</td> <br></br>
           <td>{question.Answer}</td> <br></br>


           
           
        

                                        

             ))}

                </div>
            )
        }

}
