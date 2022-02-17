import React from 'react'
import  { useEffect,useState } from 'react';
import Offer from '../Offer/Offer';
import './Offers.css'

const Offers = () => {
    const [services, setSevices] = useState([])

    useEffect(() => {
        fetch('https://fathomless-waters-16435.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => {
                setSevices(data);
             
            });
    }, []);
 
    return (
        <div id='offers' className='home-container'>
            
           <div className='services'>
           <h1 className='headline text-center mt-5'>Our Popular Services</h1>
           <hr style={{width:'100px', color:'blue', margin:'auto' }} />
           <div className='popular-services'>
            
            {
            services.map(service =><Offer 
                key={service.id}
                service={service}></Offer>)
            }
        </div>
           </div>
        </div>
    )
}

export default Offers
