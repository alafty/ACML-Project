import React,{Component,useState} from "react";
import axios from 'axios';


    export default class Create extends Component<{QuizID}> {
   
    constructor(props: any) {
        super(props);

        
        }
        // console.log(props.QuizID);
  
       
        const [users,setUsers] = useState([]);
        const getusers = async ()=> {
              await axios.get('http://localhost:8000/read',{mode:'cors'}).then((res)=>{console.log(res)
                const fetchedUsers= res.data
                setUsers(fetchedUsers)
                console.log(fetchedUsers)
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
