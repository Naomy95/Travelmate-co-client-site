import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <img  src='https://img.freepik.com/free-vector/404-error-poster-with-page-found-use-website_1284-49337.jpg'></img>
          
           <Link to='/'>
                <button className='btn-add'>Go Back</button>
            </Link>
          
        </div>
    )
}

export default NotFound
