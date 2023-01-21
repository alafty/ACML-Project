import { Request, Response, NextFunction } from "express";
const pdf = require('html-pdf');
const pdfGenerator = require('pdfkit');
const PDFGenerator = require('pdfkit');
const fs = require('fs');
const sendEmail = require("../Utils/sendEmail");
import User from '../Models/individualTrainee';

const pdfTemp = require('../Models/pdf.ts');



const createPDF = async (req: Request, res: Response) => {
   let w =   pdf.create(pdfTemp(req.body.name, req.body.course, req.body.date), {})
    .toFile(`${__dirname}/pdfs/${req.body.name}.pdf`, async (err: any) => {
        var loc = `${__dirname}/pdfs/${req.body.name}.pdf`
        let user = await User.findOne({Username:req.body.name});
        try {
        await sendEmail(user.Email, "Certificate of completion", "Congratulation! Here is you Certificate",loc,req.body.name);
        res
                .status(200)
                .send({ message: "Certificate  sent to your email account" });
        }
             catch (error) {
            res.status(500).send({ message: "Internal Server Error" });
        }
        
    });

   

 
};

const createNotesPDF = (req: Request, res: Response) => {
    let theOutput = new PDFGenerator 

    // pipe to a writable stream which would save the result into the same directory
    theOutput.pipe(fs.createWriteStream(`${__dirname}/TestDocument.pdf`))
    
    theOutput.text(req.body.notes)
    
    // write out file
    theOutput.end()
    res.send("pdf created")
};

const getPDF = (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/pdfs/${req.body.name}.pdf`)
}
const getNotes = (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/TestDocument.pdf`)
}
export { createPDF, getPDF,createNotesPDF,getNotes};
