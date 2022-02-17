import React from 'react'
import './Adventures.css'

const Adventures = () => {
  return (
   <div>
        <h1 className='text-center my-5 headline'>Some Adventure Ideas for you</h1>
    <div className='adventure-container text-center'>
    
        <div className='adventure'>
            <img src="https://cdn.pedaltripr.com/assets/images/hero/journal/mountain-biking---my-first-love-9.jpg" alt="" />
            <h2>Cycling</h2>
            <p className='text-muted'>Be healthy by cycling</p>
        </div>
        <div className='adventure'>
            <img src="https://images.unsplash.com/photo-1506223064838-a9dff537fe98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            <h2>Paddleboarding</h2>
            <p className='text-muted'>It's really a oarful hobby</p>
        </div>
        <div className='adventure'>
            <img src="https://images.unsplash.com/photo-1504470695779-75300268aa0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9uZmlyZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            <h2>Bonfire</h2>
            <p className='text-muted'>Go outside and enjoy bonfire with your friends</p>
        </div>
        <div className='adventure'>
            <img src="https://images.unsplash.com/photo-1509804041229-d0e9abbf44ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyYWdsaWRpbmd8ZW58MHx8MHx8&w=1000&q=80" alt="" />
            
            <h2>Paragliding</h2>
            <p className='text-muted'>Make paragliding to yor Adventure list</p>
        </div>
    </div>
   </div>
  )
}

export default Adventures