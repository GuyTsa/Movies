import P1 from './P1.jpeg';
import './App.css';
import Nav from './components/Navbar/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';


//<Nav/>


const useStyles = makeStyles({
    root: {
        width: 300,
        height: 300,
        background:'red'
        },
  
});

function App() {
  const classes = useStyles();

 
  return (
    <div >
 <Card className={classes.root}>
     
     </Card>
    
      </div>
  );
}

export default App;
