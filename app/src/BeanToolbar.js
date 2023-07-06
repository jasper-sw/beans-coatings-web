import bean_with_text from './bean_with_text.svg';
import bean_clear from './bean_clear.svg'
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography, Button, Icon } from '@mui/material';
import MenuIcon from '@mui/material/MenuItem';
import ListIcon from '@mui/icons-material/List';

function BeanToolbar() {
  return (
    <div >
        <Toolbar style={{color: 'black', backgroundColor: '#bbbbbb'}}>
            <IconButton style={{color: 'black'}}>    
                <ListIcon style={{fontSize: 'calc(30px + 2vmin)'}}/>
            </IconButton>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                Beans Coatings
            </Typography>
            <img src={bean_with_text} className="App-logo" alt="logo" />
        </Toolbar>
    </div>
  );
}

export default BeanToolbar;
