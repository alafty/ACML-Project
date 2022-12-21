import React,{Component} from "react";
import axios from 'axios';
type State = {
    Email: string,
    Error: string,
    Msg:string
  }

    export default class Create extends Component<{Email}, State> {
   
    constructor(props: any) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Email: props.Email,
            Error: '',
            Msg : ''
      
            
        }
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }

    
   async onSubmit(e) {
        e.preventDefault();

      console.log("Here");

        const reqBody = {
            Email: this.state.Email,
        }

        try {
          const url = `http://localhost:8000/passwordreset/SendLink`;
          const { data } = await axios.post(url, reqBody);
          this.setState({
            Email:'',
            Msg:data.message,
            Error:''
          })
          
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            this.setState({
              Msg:'',
              Error:error.response.data.message
            })

          }
        }
       
    }

        render() {
          return (
            <div >
              <form  onSubmit={this.onSubmit}>
                <h1>Forgot Password</h1>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.onChangeEmail}
                  value={this.state.Email}
                  required
                  
                />
                {this.state.Error && <div>{this.state.Error}</div>}
                {this.state.Msg && <div>{this.state.Msg}</div>}
                <button type="submit" onClick={this.onSubmit} >
                  Submit
                </button>
              </form>
            </div>
          );
}


    }

