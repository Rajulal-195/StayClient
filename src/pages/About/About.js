import React from 'react'
import Headers from '../../components/header/Headers'
import "./About.css"
import Footers from '../../components/footer/Footers'

function About() {
  return (
    <>
      <Headers />
      <div className='container'>
        <div className='row about'>
          <p className='headshorts text-center'> STAY MENU</p>
        </div>
        <div className='row '>
          <p className='headshort'>- Our Mission - </p>
          <div className='col '>
            <p className='p-2  member'>
              &emsp;&emsp;StayMenu is a global platform that empowers entrepreneurs and Big businesses with hotels and homes by providing full stack technology that increases earnings and eases operations. Bringing affordable and trusted accommodation that guests can book instantly.
            </p>
          </div>
        </div>
        <div className='row about  '>
          <p className='headshort '>- Meet Our Team -  </p>
          <div className='col-md setimg'>
            <div className='myDIV'>
              <img className=" imgsetss  " src='./images/narrotam.jpeg' alt='' />
              <p className='member'>Mr. Narottam Sharma</p>
            </div>
            <div className='hide'>&emsp;&emsp;Narottam Sharma is Founder & CEO of STAY MENU Organisation. StayMenu is a global platform that empowers entrepreneurs and small businesses with hotels and homes </div>
          </div>
          <div className='col-md setimg'>
            <div className='myDIV'>
              <img className=" imgsetss  " src='images/RajuMewara.jpeg' alt='' />
              <p className='member'>Mr. Raju Mewara</p>
            </div>
            <div className='hide'>&emsp;&emsp;Raju Mewara is a Tech Head & Management at STAY MENU Organisation , which are responsite for find Out Comfortable stay for Every Turist in, All India  . </div>
          </div>

          <div className='col-md setimg'>
            <div className='myDIV'>
              <img className=" imgsetss  " src='https://th.bing.com/th/id/OIP.tX5QeKVzCsK1dSlj6dE6UwHaG0?w=177&h=180&c=7&r=0&o=5&pid=1.7' alt='' />
              <p className='member'>Mr. Deepanshu Gupta</p>
            </div>
            <div className='hide'>&emsp;&emsp;Deepanshu Gupta is Manage Marketing Retated Task like advertisement and Listing Tech Developer..</div>
          </div>
        </div>
      </div>


      <Footers />


    </>
  )
}

export default About