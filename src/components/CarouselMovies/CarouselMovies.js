
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from 'react-carousel-minimal';


const useStyles = makeStyles({
 captionStyle :{
    fontSize: '2em',
    fontWeight: 'bold',
  },
   slideNumberStyle:{
    fontSize: '20px',
    fontWeight: 'bold',
  }


  
});
const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}
const data = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: `<div>
                San Francisco
                <br/>
                Next line
              </div>`
  },
  {
    image: "./././Pictures/bb.jpg",
    caption: "Scotland"
  },
  {
    image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Darjeeling"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "San Francisco"
  },
  {
    image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    caption: "Scotland"
  },
  {
    image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "Darjeeling"
  },
  {
    image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    caption: "San Francisco"
  },
  {
    image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    caption: "Scotland"
  },
  {
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    caption: "Darjeeling"
  }
];
const  CarouselMovies =({MoviesPath_Description_JSON}) => {
  const classes = useStyles();

  return (
    <div>
        <div>
          <Carousel
            data={data}
            time={2000}
            width="100vw"
            height="45vh"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
          />
        </div>
 </div>
  );
}

export default CarouselMovies;
