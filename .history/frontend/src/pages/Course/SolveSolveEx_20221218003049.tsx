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


    [value, setValue] = React.useState(false);

     RadioButton = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="radio" checked={value} onChange={onChange} />
            {label}
          </label>
        );
      };
        render() {
          
            return (
                <div style={{marginTop: 20}}>

                    {this.state.Question.map((question)=>(
                             <div>    
                             <h1>Question</h1>
                             <h2>{question.Question}</h2>
                             <this.RadioButton
        label="Cat"
        value={value}
        onChange={handleChange}
      />
                            </div>

                                        

             ))}

                </div>
            )
        }

}
