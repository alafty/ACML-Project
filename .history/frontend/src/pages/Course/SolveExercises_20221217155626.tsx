import React,{Component,useState} from "react";
import axios from 'axios';


    export default class Create extends Component<{QuizID}> {
   
    constructor(props: any) {
        super(props);

        
        }
        
  
       
         getQuestions = async ()=> {
        const [questions,setQuestions] = useState([]);

              await axios.post('http://localhost:8000/Quiz/getQuiz',this.props.QuizID).then((res)=>{console.log(res)
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
                    <button  onClick={this.getQuestions}>get questions</button>
                </div>
            )
        }

}
