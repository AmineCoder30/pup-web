import React from 'react'

function Contact() {
  return (
    <div className='contact'>
    <h2>Contact Us</h2>
    <p>Lorem ipsum dolor site amet, consectetur adipiscing elit.
     Aliquam interdum, nisl sed faucibus tempor, massa velit laoreet ipsum,
      et faucibus sapien magna at enim. Suspendisse a dictum tortor, vel rhoncus libero.</p>
    <form>
    <div className='row'>
        <div className='col-12 col-sm-6'>
        <input  type='text' placeholder='name' />
        </div>
        <div className='col-12 col-sm-6'>
        <input type='email' placeholder='email'/>
        </div>
    </div>
    <textarea placeholder='message'></textarea>
    <button className='btn btn-primary'>submit</button>
    </form>
        
    </div>
  )
}
export default Contact
