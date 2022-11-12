import React from "react"
import '../App.css'
import Slider  from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function SlideBar(props){
    const [image,setimage]=React.useState(props.slide)
   console.log(image)
   const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 500,
      autoplaySpeed:2500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    // const Image = () => {image.map()}
    console.log(Image)
   return (
      <main>
        <Slider {...settings}>
            {
                image.map((val) =>(
                    <div className="Banner">
                    
                        <div className="Banner-image">
                        <img src={val.url} class="slideImage" alt="..."/>
                        </div>
                
                
                    </div>    
            
                ))
            }
          
        </Slider>
      </main>
    );
  }


    