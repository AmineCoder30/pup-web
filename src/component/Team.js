import React from 'react'
import img1 from '../images/team.jpg'

 function Team() {
  return (
    <div className='team'>
        <h2>Background of Our Team</h2>
        <div className='row '>
        <div className='col-12 col-md-8'>
        <p>Vestibulum aliquet, arcu accumsan lobortis bibendum, 
        justo velit efficitur lorem, at pulvinar mi justo nec lacus.
         Nullam et libero aliquet, luctus nunc sit amet, tincidunt ligula.
          Sed finibus ante sed tortor cursus, nec malesuada lectus interdum.</p>
        <p>Sed ex turpis, vulputate in efficitur id, lobortis eget nibh. 
        Pellentesque maximus ipsum eget velit imperdiet sodales.
         Suspendisse in blandit mi.</p>
        <p>
        Pellentesque finibus felis risus, ut malesuada felis viverra at.
         Quisque accumsan in mi non hendrerit.</p>
         <button className='btn'>read more</button>
        </div>
          <div className='col-6 col-md-4'>
          <img src={img1} alt='gradient' />
          </div>

        </div>
    </div>
  )
}

export default Team