import React from 'react'
import  { useEffect,useState } from 'react';
import Offer from '../Offer/Offer';
import './Offers.css'

const Offers = () => {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        fetch('https://fathomless-waters-16435.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => {
                setOffers(data);
             
            });
    }, []);
    
 
    return (
        <div id='offers' className='home-container'>
            
           <div className='offers'>
           <h1 className='headline text-center mt-5'>Provided Offers</h1>
           <hr style={{width:'100px', color:'blue', margin:'auto' }} />
           <div className='popular-offers'>
            
            {
            offers.map(offer =><Offer 
                key={offer.id}
                offer={offer}></Offer>)
            }
        </div>
           </div>
        </div>
    )
}

export default Offers
