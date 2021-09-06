import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
size:{
  width:"20vw",
  height: "300px",
  minWidth:'132px',
  maxWidth:'240px'
},
fonts_categories: {
    fontFamily:['Train One', 'cursive'].join(','),
    color:"black"
 
   },
  
});
//"./././Pictures/p5.jpg"
// אני מביא רק את התמונה עצמה וזה שם לי אותה יפה בקארד
 const MovieCard=({UrlMovie})=> {
  const classes = useStyles();
  return (
    <div >
        <Grid
            container
            direction="column" 
            alignItems="center"
            spacing={3}
        >
            <Grid item>
                <Card className={classes.size} elevation={6} >
                    <img  width="100%" height="300px"src={"./././Pictures/"+UrlMovie}/>
                </Card>
            </Grid>
            <Grid item>
                <Button style={{ backgroundColor: "white",paddingLeft:'5px'}} variant="contained" color="primary" id={UrlMovie}>
                    <Typography className={classes.fonts_categories}>Order ticket</Typography>
                </Button>
            </Grid>
        </Grid>
    </div>




 
  );
}

export default MovieCard;
