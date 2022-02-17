
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'

const ManageAllOrders = () => {
    const {user}=useAuth()
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://fathomless-waters-16435.herokuapp.com/users')
        .then(res=> res.json())
        .then(data=>setUsers(data))
    })


    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://fathomless-waters-16435.herokuapp.com/users/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers);
                    }
                });
        }
    }
 



  return (
  <div>
      <h1 className='text-center'>{user?.displayName}'s Order</h1>
     <ul>
     {
          users.map(product=>
            <div key ={product._id}>
                  <div className=' d-flex justify-content-center' >
          <Card style={{ width:'80%' }}>
  <Card.Img variant="top" src={product.img} className="card-img" />
  <Card.Body>
    <Card.Title className='font-weight-bolder'>{product.name}</Card.Title>
    <Card.Text className='text-muted'>
     {product.p}
    </Card.Text>
    {/* <Link to={`/appointment`}> */}
    
     <button className="btn-card mt-5" onClick={() => handleDeleteUser(product._id)}>Delete Order</button>
        
   {/* </Link> */}
  </Card.Body>
</Card>
    </div>
                </div>)

      }
     </ul>
  </div>
  )
}


export default ManageAllOrders