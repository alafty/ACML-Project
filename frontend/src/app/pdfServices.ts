import axios from 'axios'
import qs from 'qs'
import { saveAs } from 'file-saver';

export const generatePDF = async (name: String, course: String) => {
    const tod = new Date();
    var data = qs.stringify({
    name: name,
    course: course,
    date: `${tod.getDate()}/${tod.getMonth() + 1}/${tod.getFullYear()}`
  });
    var config = {
    method: 'post',
    url: 'http://localhost:8000/pdf/generatePDF',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(() => axios.post('http://localhost:8000/pdf/getPDF',data, { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'newPdf.pdf');
      })

      
      
}

export const generateNotesPDF = async (notes: String) => {
  var data = qs.stringify({
  notes: notes
  
});
  var config = {
  method: 'post',
  url: 'http://localhost:8000/pdf/generateNotesPDF',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(() => axios.get('http://localhost:8000/pdf/getNotes', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

      saveAs(pdfBlob, 'MyNotes.pdf');
    })

    
    
}
const Services = {
    generatePDF,
    generateNotesPDF
}

export default Services;