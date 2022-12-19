import React,{Component} from "react";
import axios from 'axios';
import questionBankModel from "../Models/questionBank.tsx";
type State = {
    Question: [questionBankModel]

}

    export default class Create extends Component<{}, State> {
   
    constructor(props: any) {
        super(props);




        this.onSubmit = this.onSubmit.bind(this);


    }

    

    onSubmit(e) {
        e.preventDefault();



        
        axios.post('http://localhost:8000/Quiz/getQuiz',1)
        .then(res=>console.log(this.setState({Question: res.data}))); 
   
       
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
