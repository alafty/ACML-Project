import React,{Component,useState} from "react";
import axios from 'axios';
import questionBankModel from "../Models/questionBank.tsx";
type State ={
  
    Question: questionBankModel,

}


    export default class Create extends Component<{QuizID}> {
   
    constructor(props: any) {
        super(props);

        
        }
        
  
        getQuestions = async ()=> {

          await axios.post('http://localhost:8000/Quiz/getQuiz',1).then((res)=>{console.log(res)
           return  res.data
         
        }
          
          )
         
        }
        ;
       

        render() {
          
             console.log(this.props.QuizID);

            return (
                <div style={{marginTop: 20}}>
                    <h3>Create New Questiom</h3>
                    <button  onClick={getQuestions}>get questions</button>
                </div>
            )
        }

}
