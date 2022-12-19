import React,{Component} from "react";
import axios from 'axios';


    export default class Create extends Component<{QuizID}> {
   
    constructor(props: any) {
        super(props);

        
        }
        // console.log(props.QuizID);
  
       
    

        render() {
             console.log(this.props.QuizID);

            return (
                <div style={{marginTop: 20}}>
                    <h3>Create New Questiom</h3>
                </div>
            )
        }

}
