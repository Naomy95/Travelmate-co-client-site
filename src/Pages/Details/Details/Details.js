import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import Detail from '../Detail/Detail';
import './Details.css'

const Details = () => {
    const { detailId } = useParams();
    const id = parseInt(detailId);
    console.log(id)
    const [details, setdetails] = useState([])
    useEffect(() => {
        fetch('https://fathomless-waters-16435.herokuapp.com/details')
            .then(res => res.json())
            .then(data => setdetails(data));
    }, []);

    const detailsAbout = details.find(detail => detail.id === id)
    
    return (

        
        <div className='detail-container row'>
          <div className='col-lg-4 col-md-12 col-sm-12 pt-5 px-5 '>
          <Nav className="flex-column text-dark " >
  <Nav.Link className='text-dark'  as={HashLink} to='/details/1'>Bandarban</Nav.Link>
  <Nav.Link className='text-dark' href="/details/2">Kaptai</Nav.Link>
  <Nav.Link className='text-dark' href="/details/3">Gazipur Shalbon</Nav.Link>
  <Nav.Link className='text-dark' href="/details/4">Saint Martin</Nav.Link>
  <Nav.Link className='text-dark' href="/details/5">Sylhet</Nav.Link>
  <Nav.Link className='text-dark' href="/details/6">Cox's Bazar</Nav.Link>
 
  
</Nav>
          </div>
        
               <div className='col-lg-8 col-md-12 col-sm-12 mt-2'>
               <Detail details={detailsAbout}></Detail> 
               </div>
                 
        </div>
    );
};

export default Details;