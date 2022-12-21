import React,{Component} from "react";
import axios from 'axios';
import '../../Styling/mainLayout.css';
import Header from '../../components/header.tsx';
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";


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
              <div className="container">
                <Header />
                  <div className='body'>
                        <h2 
                        style={{ marginTop: "200px" }} 
                        className='title'>
                          Forgot Password</h2>
                        <TextField 
                        style={{marginLeft: "150px"}}
                        label="Email"
                        variant="standard"
                        className='search-bar'
                        onChange={this.onChangeEmail}
                        value={this.state.Email}
                        required={true}
                          />
          
                          <Button
                          variant="contained"
                          id="filled-button"
                          style={{ "width": "400px", "marginTop": "50px", "marginLeft": "70vw" }}
                          onClick={this.onSubmit}
                          > Login </Button>
                          {this.state.Error && <p style={{marginLeft: "70vw"}}>{this.state.Error}</p>}
                          {this.state.Msg && <p style={{marginLeft: "70vw"}}>{this.state.Msg}</p>}
                        </div>
                        
                    </div>
          );
}


    }

