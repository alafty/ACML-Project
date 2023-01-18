import { Request, Response, NextFunction } from "express";
const pdf = require('html-pdf');
const pdfGenerator = require('pdfkit');
const PDFGenerator = require('pdfkit');
const fs = require('fs');

const pdfTemp = require('../Models/pdf.ts');
let theOutput = new PDFGenerator 


const createPDF = (req: Request, res: Response) => {
    pdf
    .create(pdfTemp(req.body.name, req.body.course, req.body.date), {})
    .toFile(`${__dirname}/pdfs/result.pdf`, (err: any) => {
        if(err){
            res.send(Promise.reject());
        } 
        res.send(Promise.resolve());
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
    res.sendFile(`${__dirname}/pdfs/result.pdf`)
}
const getNotes = (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/TestDocument.pdf`)
}
export { createPDF, getPDF,createNotesPDF,getNotes};
