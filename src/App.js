import React from 'react';
import Navbar from './navbar.js';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField,Button,CircularProgress } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#7cd9e0',
    paddingBottom: '5%',
    flexDirection: "Column",
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  Paper: {
    height: 450,
    width: 400,
    margin: 'auto',
    marginTop: 0,
    textAlign: 'center',
  },
  Textbox: {
    margin: 'auto',
    
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <Paper elevation={3} className={classes.Paper} >
        <h1>Login</h1>
        <br />
        <form className={classes.Textbox} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Enter Username" variant="outlined" /><br /><br /><br />
          <TextField id="outlined-basic" label="Enter Password" type="Password" variant="outlined" /><br /><br /><br />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </form>
        <br />
        <CircularProgress value= {50} />
        
      </Paper>
    </div>
  );
}

export default App;
