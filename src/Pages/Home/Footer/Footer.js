import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faFacebook, faFacebookSquare, faInstagram,faInstagramSquare,faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faFacebookSquare} />
    const element2 = <FontAwesomeIcon icon={faInstagramSquare} />
    const element3=<FontAwesomeIcon icon ={faTwitterSquare} />

    return (
       <div className='home'>
            <div className='footer-container'>
           <div>
           <div className='contact-address'>
                <h3>Contact Us</h3>
              
                <h5>Travelmate.co,Bangladesh</h5>
            
                <h5>82 Baridhara, Dhaka</h5>
           
                <p>Phone: 123456789</p>
            </div>

            <div className='social-media'>
                <h3>Or Find us in Social Media</h3>
                <a className='media-icon' href="">{element3}</a>
                <a className='media-icon' href="">{element2}</a>
                <a className='media-icon' href="">{element1}</a>
            </div>
          
           </div>
          
<div>

<div className="quick-links">
<h3 >Quick Links</h3>
<div className='links-ul'>
    <ul>
<li><a   href="#">Get Started</a></li>
<li><a  href="#">Adventure Ideas</a></li>
</ul>
</div>

</div>


<div className="column-subscribe">
 <h3>Newsletter</h3>
  <div>
   <input type="email" placeholder="Your email id here" />
   <button>Subscribe</button>
  </div>

</div>

</div>

        </div>
       
       </div>
    )
}

export default Footer
