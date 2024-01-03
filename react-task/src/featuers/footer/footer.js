import React from 'react'
import "../../assets/css/footer/footer.css"

const Footer = () => {
  return (
    <div>
      <div>
        <h3 className='footer-head'>Interested in delving deeper into the project?</h3>
      </div>
      <div style={{paddingLeft:"250px",paddingRight:"250px"}}>
      <p className='footer-ph'>
          If you'd like to explore further details about our initiatives or any of our affiliated brands,
          don't hesitate to connect. You can reach out to us via email at <span className='footer-sp'>hello@abc.com</span> or give us a call at 
          <span className='footer-sp'>+91 480 20802730.</span>
        </p>
      </div>
      <div>
        <button className='footer-but'>Ring us on Skype</button><span style={{color:"black"}}>----</span>
        <button className='footer-button'>Contact Us</button>
      </div>
      <div style={{paddingTop:"200px"}}>
        <span className='footer-span'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer