import React,{Component} from "react";
import axios from 'axios';
type State = {
    Question: string,
    Choice1: string,
    Choice2: string,
    Choice3: string,
    Choice4: string,
    Answer: string,
    Grade : number,
    Course: string,
    QuizID: string 
}

    export default class Create extends Component<{}, State> {
   
    constructor(props: any) {
        super(props);

        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeChoice1 = this.onChangeChoice1.bind(this);
        this.onChangeChoice2 = this.onChangeChoice2.bind(this);
        this.onChangeChoice3 = this.onChangeChoice3.bind(this);
        this.onChangeChoice4 = this.onChangeChoice4.bind(this);
        this.onChangeAnswer = this.onChangeAnswer.bind(this);
        this.onChangeGrade = this.onChangeGrade.bind(this);
        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onChangeQuizID = this.onChangeQuizID.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Question: '',
            Choice1: '',
            Choice2: '',
            Choice3: '',
            Choice4: '',
            Answer:  '',
            Grade : 0,
            Course:  '',
            QuizID:  ''
            
        }
    }

    onChangeQuestion(e) {
        this.setState({
            Question: e.target.value
        });
    }

    onChangeChoice1(e) {
        this.setState({
            Choice1: e.target.value
        });
    }
    onChangeChoice2(e) {
        this.setState({
            Choice2: e.target.value
        });
    }
    onChangeChoice3(e) {
        this.setState({
            Choice3: e.target.value
        });
    }
    onChangeChoice4(e) {
        this.setState({
            Choice4: e.target.value
        });
    }
    onChangeAnswer(e) {
        this.setState({
            Answer: e.target.value
        });
    }
    onChangeGrade(e) {
        this.setState({
            Answer: e.target.value
        });
    }
    onChangeCourse(e) {
        this.setState({
            Course: e.target.value
        });
    }
    onChangeQuizID(e) {
        this.setState({
            QuizID: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();



        const newQuestion = {
            Question: this.state.Question,
            Choice1:  this.state.Choice1 ,
            Choice2:  this.state.Choice2 ,
            Choice3:  this.state.Choice3 ,
            Choice4:  this.state.Choice4 ,
            Answer:   this.state.Answer ,
            Grade :   this.state.Grade,
            Course:   this.state.Course  ,
            QuizID:   this.state.QuizID  
            

        }
        
        axios.post('http://localhost:8000/quiz/CreateQuestion',newQuestion)
        .then(res=>console.log(res.data)); 
        console.log(`Form submitted:`);
       
        console.log(JSON.stringify(newQuestion));
        this.setState({
            Question: '',
            Choice1: '',
            Choice2: '',
            Choice3: '',
            Choice4: '',
            Answer:  '',
            Grade : 0,
            Course:  '',
            QuizID:  ''

        })
    }

        render() {
            return (
                <div style={{marginTop: 20}}>
                    <h3>Create New Questiom</h3>
      
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Question: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.Question}
                                    onChange={this.onChangeQuestion}
                                    />
                        </div>
                        
                        <div className="form-group">
                            <label>Choice1: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.Choice1}
                                    onChange={this.onChangeChoice1}
                                    />
                        </div>
                        <div className="form-group">
                            <label>Choice2: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.Choice2}
                                    onChange={this.onChangeChoice2}
                                    />
                        </div>
                        <div className="form-group">
                            <label>Choice3: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.Choice3}
                                    onChange={this.onChangeChoice3}
                                    />
                        </div>
                        <div className="form-group">
                            <label>Choice4: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.Choice4}
                                    onChange={this.onChangeChoice4}
                                    />
                        </div>
                        <div className="form-group">
                            <label>Answer: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.Answer}
                                    onChange={this.onChangeAnswer}
                                    />
                        </div>
                        <div className="form-group">
                            <label>Grade: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.Grade}
                                    onChange={this.onChangeGrade}
                                    />
                        </div>
                        <div className="form-group">
                            <label>Course: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.Course}
                                    onChange={this.onChangeCourse}
                                    />
                        </div>
                        
                        <div className="form-group">
                            <label>QuizID: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.QuizID}
                                    onChange={this.onChangeQuizID}
                                    />
                        </div>
                        
                      
                      
                      
                        <div className="form-group">
                            <input type="submit" value="Add Question" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            )
        }

}
