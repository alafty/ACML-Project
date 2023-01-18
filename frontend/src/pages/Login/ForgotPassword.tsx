import React, { Component } from "react";
import axios from "axios";
import "../../Styling/mainLayout.css";
import Header from "../../components/header";
import Button from "@mui/material/Button";
import { Alert, TextField } from "@mui/material";
import { CustomTextField } from "../../components/TextField";
import { Link, useNavigate } from "react-router-dom";

type State = {
  Email: string;
  Error: string;
  Msg: string;
};

export default class Create extends Component<{}, State> {


  constructor(props: any) {
    super(props);
    
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Email: "",
      Error: "",
      Msg: "",
    };
  }
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();


    const reqBody = {
      Email: this.state.Email,
    };

    try {
      const url = `http://localhost:8000/passwordreset/SendLink`;
      const { data } = await axios.post(url, reqBody);
      this.setState({
        Email: "",
        Msg: data.message,
        Error: "Please check your mail",
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        this.setState({
          Msg: "",
          Error: error.response.data.message,
        });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="login-body">
          <div className="login-card">
            <h2 className="login-header">Forgot Password</h2>

            <CustomTextField
              id="text-field"
              placeholder="E-Mail"
              InputProps={{
                className: "text-field",
              }}
              onChange={(e) => {
                this.onChangeEmail(e);
              }}
            />

            <Button
              variant="contained"
              id="big-button-primary"
              onClick={this.onSubmit}
            >
              {" "}
              Send Link{" "}
            </Button>

              <Link 
              to={'/login'}
              >
            <Button
              variant="outlined"
              id="big-button-primary-outlined"
            >
              {" "}
              Back{" "}
            </Button>
            </Link>
            {
            this.state.Error ?
            <Alert 
            severity={ this.state.Error === 'Please check your mail' ? "success" : "error"}
            className='alert'
            >{this.state.Error}</Alert> 
            :
            <></>
          }
          </div>
        </div>
      </div>
    );
  }
}
