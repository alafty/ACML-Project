import React,{Component,useState} from "react";
import axios from 'axios';
import questionBankModel from "../Models/questionBank.tsx";
type State ={
  
    Question: [questionBankModel]

}


    export default class Create extends Component<{QuizID},State> {
   
    constructor(props: any) {
        super(props);

        
        this.state = {
          Question: [''],
          
      }
        }
        
        onSubmit(){
        axios.post('http://localhost:8000/Quiz/getQuiz',1)
        .then(res=>console.log(this.state = res.data)); 
        console.log(this.state)  
      }

     


        render() {
          
             console.log(this.props.QuizID);

            return (
                <div style={{marginTop: 20}}>
                    <h3>Create New Questiom</h3>
                    <button  onClick={this.onSubmit}>get questions</button>
                </div>
            )
        }
}
