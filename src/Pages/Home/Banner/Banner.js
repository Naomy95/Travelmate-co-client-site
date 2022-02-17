
import React from 'react'
import { Carousel } from 'react-bootstrap'
import first from '../../../images/sea1.jpg'
import second from '../../../images/hill1.jpg'
import third from '../../../images/city3.jpg'
import './Banner.css'

export const Banner = () => {
    return (
        <>
        <Carousel className='image'>
  <Carousel.Item >
    <div className='img-container'>
    <img
      className="d-block  "
      src={first}
      alt="First slide"
    />
   
    <h1 className="centered">Adventure with us</h1>
    </div>
   
  </Carousel.Item>
  <Carousel.Item>
  <div className='img-container'>
    <img
      className="d-block  "
      src={second}
      alt="Second slide"
    />
    
    <h1 className="centered">Sea or hill <br />
    Travelmate is with you
     </h1>

    </div>
   
  </Carousel.Item>
  <Carousel.Item>
  <div className='img-container'>
    <img
      className="d-block  "
      src={third}
      alt="Third slide"
    />
    <h1 className="centered">Join us <br></br>
    with your friends & family
     </h1>
    </div>

   
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Banner;