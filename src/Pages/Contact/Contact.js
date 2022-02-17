import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faInstagram,faTwitter } from '@fortawesome/free-fas-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const element1 = <FontAwesomeIcon icon={faPhone} />
    const element2=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const element3 = <FontAwesomeIcon icon={faEnvelope} />
    return (
     <div className='contact-container'>
          <div>
          <form className='form'>
           <h1>Contact Form</h1>

           <label>Name</label>
           <input placeholder='name'></input>
           

           <label>Email</label>
           <input placeholder='Email'></input>
           

           <label>Message</label>
           <input placeholder='message'></input>

           <button 
className='btn-add' type='submit'>Submit
</button>
       </form>
          </div>

       <div className="adress-list">
                    <h1></h1>
                    <p>  {element1} 83,Bridhara,Dhaka</p>
              

              
                    <p> {element2} + 01 234 567 89</p>
            

                
                    <p>{element3} contact @travelmate.co</p>
             
           
        </div>
     </div>
    )
}

export default Contact
