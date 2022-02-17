import React from 'react'
import Adventures from '../Adventures/Adventures'
// import About from '../About/About'
import  Banner  from '../Banner/Banner'
import Footer from '../Footer/Footer'


import Offers from '../Offers/Offers'


const Homepage = () => {
    return (
        <div id='home'>
             <Banner></Banner> 
            {/* <Services></Services> */}
            <Adventures></Adventures>
            <Offers></Offers>
            {/* <About></About> */}
           <Footer></Footer>
           
        </div>
    )
}

export default Homepage
