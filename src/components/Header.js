import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
    headText: {
      padding: theme.spacing(0, 74, 6),
    },
 
  }));



const Header =()=>{
    const classes = useStyles();
    return(
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                    <a className={classes.headText}>  OPD Assitant BOT </a>
                    </Typography> 
                </Toolbar>  
            </AppBar>
        </div>

    )
}

export default Header  