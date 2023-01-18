import {
    createPDF,
    getPDF,
    createNotesPDF,
    getNotes
  } from "../Controllers/pdfController";
  import { Router } from "express";
  const pdfRouter = Router();
  
  pdfRouter.post('/generatePDF', createPDF);
  pdfRouter.post('/generateNotesPDF', createNotesPDF);
  pdfRouter.get('/getPDF', getPDF );
  pdfRouter.get('/getNotes', getNotes );

  
  export default pdfRouter;
  