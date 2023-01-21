import React from "react";
import axios from "axios";
import {saveAs} from 'file-saver'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import Services from "../app/pdfServices";

function PDFGenerator() {
    const [name, setName] = React.useState('');
    const [course, setCourse] = React.useState('');
    const [date, setDate] = React.useState('');
  
    return (
        <div className="container">
           <TextField style={{ marginRight: "30px" }} label="Name" variant="standard" className='search-bar' required={true}
            onChange={(e) => {
              setName(e.target.value);
            }}
            />

            <TextField style={{ marginRight: "30px" }} label="Course Name" variant="standard" className='search-bar' required={true}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
            />

            <TextField style={{ marginRight: "30px" }} label="Date" variant="standard" className='search-bar' required={true}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            />

            <Button
          variant="contained"
          id="filled-button"
          style={{ "width": "400px", "marginTop": "50px", "marginLeft": "70vw" }}
          onClick={
            () => {
                Services.generatePDF(name, course);
            }
          }
        > Download PDF </Button>
        </div>
    )
};
export default PDFGenerator;