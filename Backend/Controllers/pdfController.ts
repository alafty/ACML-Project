import { Request, Response, NextFunction } from "express";
const pdf = require('html-pdf');

const pdfTemp = require('../Models/pdf.ts');

const createPDF = (req: Request, res: Response) => {
    pdf
    .create(pdfTemp(req.body.name, req.body.course, req.body.date), {})
    .toFile('Backend/Controllers/pdfs/result.pdf', (err: any) => {
        if(err){
            res.send(Promise.reject());
        } 
        res.send(Promise.resolve());
    });
};

const getPDF = (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/pdfs/result.pdf`)
}

export { createPDF, getPDF};
