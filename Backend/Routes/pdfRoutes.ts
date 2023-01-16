import {
    createPDF,
    getPDF
  } from "../Controllers/pdfController";
  import { Router } from "express";
  const pdfRouter = Router();
  
  pdfRouter.post('/generatePDF', createPDF);
  pdfRouter.get('/getPDF', getPDF );
  
  export default pdfRouter;
  