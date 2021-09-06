import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  fonts_categories: {
   fontFamily:['Train One', 'cursive'].join(',')

  },
  body:{
      background:'black',
      width:'100vw'
      ,height:"100vh"
  },
  input: {
    color: "white"
  },
  
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>

        <AppBar position="static"  style={{ background: '#202020' }}>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={4}
                >

                    <Grid item xs={3} md={5}><IconButton color="inherit" ><MenuIcon/>  </IconButton></Grid>
                    <Grid item xs={2} md={1}> <Typography   variant="h6" className={classes.fonts_categories} >Actions</Typography></Grid>
                    <Grid item xs={2}  md={1}> <Typography  variant="h6" className={classes.fonts_categories}  >Comedy</Typography></Grid>
                    <Grid item xs={2}  md={1}> <Typography   variant="h6" className={classes.fonts_categories}>Romans</Typography></Grid>
                    <Grid item xs={2}  md={1}> <Typography   variant="h6" className={classes.fonts_categories} >Drama</Typography></Grid>
                           
                </Grid>
                <TextField 
                    id="movie"
                    placeholder="Search movie"
             
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge='end'> <SearchIcon style={{ color: 'white' }}/>  </IconButton>
                            </InputAdornment>
          ),className: classes.input,
        }}
      />
                
            </Toolbar>
        </AppBar>
        
    </div>
  );
};

export default NavBar;
