import bean_with_text from './bean_with_text.svg';
import bean_clear from './bean_clear.svg'
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/material/MenuItem';

function BeanToolbar() {
  return (
    <div >
        <Toolbar style={{color: 'black', backgroundColor: '#bbbbbb'}}>
            <img src={bean_with_text} className="App-logo" alt="logo" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
            </Typography>
        <Button style={{color: 'black', backgroundColor: '#e7e7e7', margin: '5px', height: '5vmin', width: '10vmin'}}>Gallery</Button>
        <Button style={{color: 'black', backgroundColor: '#e7e7e7', margin: '5px', height: '5vmin', width: '10vmin'}}>About</Button>
        <Button style={{color: 'black', backgroundColor: '#e7e7e7', margin: '5px', height: '5vmin', width: '10vmin'}}>Login</Button>
        </Toolbar>
    </div>
  );
}

export default BeanToolbar;
