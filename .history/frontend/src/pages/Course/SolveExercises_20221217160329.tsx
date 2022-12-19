import React,{Component,useState} from "react";
import axios from 'axios';
const [questions,setQuestions] = useState([]);

const getQuestions = async ()=> {

        await axios.post('http://localhost:8000/Quiz/getQuiz',1).then((res)=>{console.log(res)
          const fetchedQuestions= res.data
          setQuestions(fetchedQuestions)
          console.log(fetchedQuestions)
      }
        
        )
       
      }
      ;
    export default class Create extends Component<{QuizID}> {
   
    constructor(props: any) {
        super(props);

        
        }
        
  
       
       

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
