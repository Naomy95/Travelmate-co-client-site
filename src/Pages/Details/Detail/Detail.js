import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Detail.css'


const Detail =(props)=>{
    const{name,img,p,id} = props?.details || {};
    const {user} =useAuth()

    const handleAddUser = e => {
     
        const newUser = { name,userEmail,userName,img,p,id};
        fetch('https://fathomless-waters-16435.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('your order has been placed Successfully.')
                    // e.target.reset();
                }
            })
        e.preventDefault();
    }

    // need to sent user email
    const userEmail = user?.email;
    const userName = user?.displayName;

   

    return (
        
            <Card style={{ width:'80%' }}>
  <Card.Img variant="top" src={img} className="card-img" />
  <Card.Body>
    <Card.Title className='font-weight-bolder'>{name}</Card.Title>
    <Card.Text className='text-muted'>
     {p}
    </Card.Text>
    {/* <Link to={`/appointment`}> */}
    <form onSubmit={handleAddUser}>
     <input className="btn-card mt-5" type="submit" value="Press for Booking" />
         </form>
   {/* </Link> */}
  </Card.Body>
</Card>
        
    )
}

export default Detail;
