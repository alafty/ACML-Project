import React,{Component,useState} from "react";
import axios from 'axios';


    export default class Create extends Component<{QuizID}> {
   
    constructor(props: any) {
        super(props);

        
        }
        
  
       
        const [questions,setQuestions] = useState([]);
        const getQuestions = async ()=> {
              await axios.post('http://localhost:8000/Quiz/getQuiz').then((res)=>{console.log(res)
                const fetchedQuestions= res.data
                setQuestions(fetchedQuestions)
                console.log(fetchedQuestions)
            }
              
              )
             
            }
            ;

        render() {
             console.log(this.props.QuizID);

            return (
                <div style={{marginTop: 20}}>
                    <h3>Create New Questiom</h3>
                </div>
            )
        }

}
