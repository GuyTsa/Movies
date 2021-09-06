
import './App.css';
import Nav from './components/Navbar/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import M from './components/CarouselMovies/CarouselMovies' 
import MovieCard from './components/MovieCard/MovieCard'
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-carousel-minimal';


const useStyles = makeStyles({
body:{
  background:"#800000",
  minHeight:'100vh'
},
dan:{
  padding:'20px',

}
  
});
function App() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Grid container 
      >
      <Grid item xs={12} ><Nav/></Grid>
      <Grid item  xs={12}><M/></Grid>
      </Grid>
      <Grid container className={classes.dan} spacing={3}  >
<Grid item xs={4} md={3}><MovieCard UrlMovie='p1.jpg'/></Grid>
<Grid item xs={4} md={3}><MovieCard UrlMovie='p2.jpg'/></Grid>
<Grid item xs={4} md={3}><MovieCard UrlMovie='p3.jpg'/></Grid>
<Grid item xs={4} md={3}><MovieCard UrlMovie='p4.jpg'/></Grid>

      </Grid>
 </div>
  );
}

export default App;
