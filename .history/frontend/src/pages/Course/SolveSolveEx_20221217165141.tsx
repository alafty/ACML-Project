import React,{Component} from "react";
import axios from 'axios';
import questionBankModel from "../Models/questionBank.tsx";
type State = {
    Question: [questionBankModel]

}

    export default class Create extends Component<{QuizID}, State> {
   
    constructor(props: any) {
        super(props);




        this.onSubmit = this.onSubmit.bind(this);


    }

    

    async  onSubmit(e) {
        e.preventDefault();



        const newQuery ={
            Subject:this.props.QuizID
        }
       await axios.post('http://localhost:8000/Quiz/getQuiz',newQuery)
        .then(res=> this.setState({Question:res.data})); 
   
       console.log(this.state)
    }

        render() {
            return (
                <div style={{marginTop: 20}}>
                    <h3>Create New Questiom</h3>
                    <button  onClick={this.onSubmit}>get questions</button>

                </div>
            )
        }

}
