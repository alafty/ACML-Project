import {styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#52adcc',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#52adcc',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fcfcfc',
    },
    '&:hover fieldset': {
      borderColor: '#52adcc',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#52adcc',
    },
  },
});