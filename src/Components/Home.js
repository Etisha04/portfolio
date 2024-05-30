import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

export default function Home(props) {

    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            typeSpeed:100,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Student!", "Developer!", "Self Learner!"],
         });
    }, []);

    return (
        <section className={props.bg?'homeSecW homeRes':'homeSecB homeRes'} id='Home'>
            <div className='homePic'>
                <img src="assets/finall.png" alt='Etisha Pednekar' className='pic'></img>
            </div>
            <div className='homeData'>
                <div className={props.bg?'homeContentW':'homeContentB'}>
                    <h1>Hey there,</h1>
                    <h2>I'm Etisha Pednekar</h2>
                    <h3>And I'm a <span ref={textRef}></span></h3>
                    <p>I love exploring various tech fields and I am currently focused on Web Development & Data Strcutures & Algorithms.</p>
                    <div className='homeHandles'>
                       <a href='https://www.linkedin.com/in/etisha-pednekar-117287249/' target="__blank"><img src='assets/linkedin.png' alt=''></img></a>    
                       <a href='https://github.com/Etisha04' target="__blank"><img src={props.bg?'assets/github.png':'assets/githubW.png'} alt=''></img></a>    
                       <a href='https://x.com/Etisha04' target="__blank"><img src='assets/twitter.png' alt=''></img></a>    
                    </div>
                </div>
            </div>
        </section>
    )
}
