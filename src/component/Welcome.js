import React from 'react'
import img1 from '../images/welcome-1.jpg'
import img2 from '../images/welcome-2.jpg'

 function Welcome() {
  return (
    <div className='welcome-item'>
    <h2>Welcome to POP design</h2>
    <div className='row'>
      <div className='col-12 col-md-6'>
        <img src={img1} alt='a girl in her car'/>
        <p>You are allowed to download, modify and use this template
         for your commercial or business websites.</p>
        <p>Please tell your friends about <span>Tooplate</span>. 
        That will be very helpful for us. Thank you.</p>
      </div>
      <div className='col-12 col-md-6'>
      <p>You are NOT allowed to put this template ZIP file for a download 
      purpose on any template collection website.</p>
      <p>
      If you have any kind of question or comment, 
      please feel free to <span>contact us</span>. You are welcome.</p>
      <img src={img2} alt='simple img'/>
      </div>
    
    </div>
    </div>
  )
}
export default Welcome
