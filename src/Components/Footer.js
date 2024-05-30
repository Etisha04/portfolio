import React from 'react'

export default function Footer(props) {
  return (
    <section className={props.bg ? 'footerSecW secFooter' : 'footerSecB secFooter'} id='Footer'>
      <footer className='footer'>
        <div className='footerContainer'>
          <h1 className='footerTitle'>Etisha Pednekar</h1>

          <ul className='footerList'>
            <li>
              <a href="#About" className='footerLinks'>About</a>
            </li>

            <li>
              <a href="#Qualifications" className='footerLinks'>Qualifications</a>
            </li>

            <li>
              <a href="#Projects" className='footerLinks'>Projects</a>
            </li>
          </ul>

          <div className='footerSocial'>
            <a href='https://www.linkedin.com/in/etisha-pednekar-117287249/' className='footerIcon' target='_blank'>
              <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href='https://github.com/Etisha04' className='footerIcon' target='_blank'>
              <i class="uil uil-github"></i>
            </a>

            <a href='https://x.com/Etisha04' className='footerIcon' target='_blank'>
              <i class="uil uil-twitter-alt"></i>
            </a>
          </div>

          <span className='footerCopyright'>
           &#169; 2023 - Etisha Pednekar. All rights reserved.
          </span>
        </div>
      </footer>
    </section>
  )
}
