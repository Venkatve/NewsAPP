import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <span className='name'>
        Inshorts clone made by -{" "}
        <a href='https://www.naukri.com/mnjuser/profile?id=&altresid' target="__blank">
            Venkatraman
        </a>
      </span>
      <hr style={{width:"90%"}}/>
      <div className='iconContainer'>
        <a href='https://www.naukri.com/mnjuser/profile?id=&altresid' target="__blank">
        <i class="fa-brands fa-instagram"></i>
        </a>
        
        <a href='https://www.naukri.com/mnjuser/profile?id=&altresid' target="__blank">
        <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href='https://www.naukri.com/mnjuser/profile?id=&altresid' target="__blank">
        <i class="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer