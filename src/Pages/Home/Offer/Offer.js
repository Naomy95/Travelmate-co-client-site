import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offer.css'

const Offer = (props) => {
    const{_id,name,img,p}=props.service;

    return (
       
              <div className='all-products col-lg-4'>
        
        <Card className="product" style={{ width: '20rem'}}>
<Card.Img className="mx-auto" variant="top" src={img} />
<Card.Body>
 <Card.Title className="title-color text-start">{name}</Card.Title>
 <Card.Text className='text-muted text-start p-text'>
 {p}
  
 </Card.Text>

 <Link to={`/details/${_id}`}>
     <button 
className='btn-add'>Detail
</button>
     </Link>
 </Card.Body>
 
</Card>
        </div>
       
    
    )
}

export default Offer
