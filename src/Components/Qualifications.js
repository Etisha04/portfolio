import React, { useState } from 'react'

export default function Qualifications(props) {

  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  }

  return (
    <section className={props.bg ? 'qualSecW' : 'qualSecB'} id='Qualifications'>
      <h2 className='qualTitle'><u>Qualifications</u></h2>
      {/* <span className='qualSubTitle'>My Journey</span> */}

      <div className='qualCont'>
        <div className='qualTabs'>
          <div className={toggle===1?'qualBtn qualActive': 'qualBtn'}
            onClick={()=>toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualIcon'></i>Education
          </div>

          <div className={toggle===2?'qualBtn qualActive': 'qualBtn'}
             onClick={()=>toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualIcon'></i>Experience
          </div>
        </div>

        <div className='qualInfo'>
          <div className={toggle===1?'qualContent qualContentActive':'qualContent'}>
            <div className='qualData'>
              <div>
                <h3 className='qualDataTitle'>B.E. in Computer Science</h3>
                <span className='qualDataSubTitle'>Dr. D.Y. Patil Institute of Technology, Pune</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>2021 - Present
                </div>
              </div>

              <div>
                <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>
            </div>

            <div className='qualData'>

              <div></div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>

              <div>
                <h3 className='qualDataTitle'>Junior College</h3>
                <span className='qualDataSubTitle'>Kankavli College, Kankavli</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>2019 - 2021
                </div>
              </div>

            </div>

            <div className='qualData'>
              <div>
                <h3 className='qualDataTitle'>10th Grade</h3>
                <span className='qualDataSubTitle'>Green Valley Eng Med School</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>2007 - 2019
                </div>
              </div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>
            </div>

            {/* <div className='qualData'>

              <div></div>

              <div>
                <span className='qualRounder'></span>
                <span className='qualLine'></span>
              </div>

              <div>
                <h3 className='qualDataTitle'>BVB</h3>
                <span className='qualDataSubTitle'>11 & 12</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>2020 - Present
                </div>
              </div>

            </div> */}

          </div>

          <div className={toggle===2?'qualContent qualContentActive':'qualContent'}>
            <div className='qualData'>
              <div>
                <h3 className='qualDataTitle'>Web Development Intern</h3>
                <span className='qualDataSubTitle'>Codsoft, Pune</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>December 2023 - January 2024
                </div>
              </div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>
            </div>


            {/* <div className='qualData'>

              <div></div>

              <div>
              <span className={props.bg?'qualRounderW':'qualRounderB'}></span>
                <span className={props.bg?'qualLineW':'qualLineB'}></span>
              </div>

              <div>
                <h3 className='qualDataTitle'>Jr. Data Manager</h3>
                <span className='qualDataSubTitle'>Association of Computer Engineering students, DIT Pune</span>
                <div className='qualCal'>
                  <i className='uil uil-calendar-alt'></i>Sept 2021 - Aug 2022
                </div>
              </div>

            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}
