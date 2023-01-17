import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import '../Styling/mainLayout.css';
import { Link, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const[image, setImage] = React.useState(props.page);
  const navigation = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='app-bar'>
          <FormControl variant='standard'>
          <Select
          style={{width: 250, height: 70}}
          value={image}
          label=""
          onChange={(e) => { 
            setImage(e.target.value);
          }}
        >
          <MenuItem value={0}>
          <div style={{backgroundColor: '#293237' }}>
          <Link to={'/'}>
          <img src={require('../assets/Logo-White.png')} height={70} width={220}/>
          </Link>
          </div>
          </MenuItem>
          <MenuItem value={1}>
          <div style={{backgroundColor: '#293237' }}>
          <Link to={'/instructor'}>
          <img src={require('../assets/Logo-White-Instructor.png')} height={70} width={220}/>
          </Link>
          </div>
          </MenuItem>
          <MenuItem value={2}>
          <div style={{backgroundColor: '#293237' }}>
          <Link to={'/corporate'}>
          <img src={require('../assets/Logo-White-Corp.png')} height={70} width={220}/>
          </Link>
          </div>
          </MenuItem>
        </Select>
      </FormControl>
      <div style={{display: 'flex', flexDirection: 'row'}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Courses or Instructors.."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button 
          variant="contained" 
          id='small-button-primary'
          >Search</Button>
          </div>
          <Link to={'/login'}>
           <Button 
          variant="contained" 
          id='small-button-primary'
          style={{width: '150px'}}
          >Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}