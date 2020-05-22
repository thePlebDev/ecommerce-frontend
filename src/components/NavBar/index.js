
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    'text-align':'center',
  },
  flexing:{
    display:'flex',
    'justify-content':'space-evenly'
  },
  buttons:{
    'text-decoration':'none',
    color:'#fff'
  }


}));



export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.flexing}>
        <Button color="inherit" className={classes.buttons}>Home</Button>
        <Button color="inherit" className={classes.buttons}>Checkout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
