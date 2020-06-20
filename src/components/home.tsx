import React from 'react'
import Link from 'next/link'
import { ServiceIcons, Icon } from '../utils/withImage'
import { FooterProps } from '../custom-types/footer'

const Landing = () => (
  <div className='Home-Landing'>
      <div className="Container">
       <h1>"Creativity is just Connecting Things"</h1>
       <p> - Steve Jobs</p> 
      </div>
    <style jsx>{`
      .Home-Landing {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h1 {
        color: white;
        font-style: italic;
        font-size: 1.95em;
        text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
        font-family: 'Marmelad';
      }

      p {
        margin: 0;
        color: white;
        font-size: 1.2em;
        font-family: 'Marmelad';
        text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
      }
      span {
        
      }
    `}</style>
  </div>
)

const Pitch = () => (
  <div className='Pitch'>
    <div className='Body'>
      <div className='Pic'>
        <img src={Icon} alt='growth icon' />
      </div>
      <div className='Text'>
        <div>
          <h2>Professional Web Services That Help Your Brand Grow</h2>
          <Link href='/contact'>
            <button>Request A Free Quote Today</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const Testimonies = () => (
  <div className='Testimonies'>
    <div className='Container'>
      <div className='Testimonies-Header'>
        <h2>Client Testimonies</h2>
      </div>
      <div className='Testimonies-Body'>
        <div className='Testimonies-Body-Header'>
          <h3>
            Pace Weitkamp, founder of{' '}
            <a href='http://www.paceweitkamp.com'>Paceweitkamp.com</a>
          </h3>
          <h4></h4>
        </div>
        <div className='Testimonies-Body-Body'>
          <p>
            I'm truly satisfied with the service that Anthony provided for me. I
            am a freelance interviewer in Indianapolis, the website that Anthony
            built from the ground up and completely personalized to my taste
            completely serves its purpose. Anthony was also very prompt with
            replying to any requests and didn't mind educating me about the
            process along the way. I would recommend his services to anyone
            from novices wanting a first website, to experts wanting a polish on
            their site or any other work done. Anthony works very hard and knows
            exactly what he is doing.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Services = () => (
    <div className='Services-Page'>
      <div className='Container'>
        <div className='Services-Header'>
          <h2>Services I Offer</h2>
        </div>
        <div className='Services-Icon'>
          <div className='Service'>
            <div className='Service-Icon'>
              <img src={ServiceIcons.Dev} alt='Front-End Web Development' />
            </div>
            <div className='Service-Text'>
              <h3>Front-End Web Development</h3>
            </div>
          </div>
          <div className='Service'>
            <div className='Service-Icon'>
              <img src={ServiceIcons.App} alt='Web App Development' />
            </div>
            <div className='Service-Text'>
              <h3>Web App Development</h3>
            </div>
          </div>
          <div className='Service'>
            <div className='Service-Icon'>
              <img src={ServiceIcons.Cms} alt='CMS Development' />
            </div>
            <div className='Service-Text'>
              <h3>CMS Development</h3>
            </div>
          </div>
          <div className='Service'>
            <div className='Service-Icon'>
              <img src={ServiceIcons.Static} alt='Static Websites' />
            </div>
            <div className='Service-Text'>
              <h3>Static Websites</h3>
            </div>
          </div>
          <div className='Service'>
            <div className='Service-Icon'>
              <img src={ServiceIcons.Dynamic} alt='Dynamic Websites' />
            </div>
            <div className='Service-Text'>
              <h3>Dynamic Websites</h3>
            </div>
          </div>
          <div className='Service'>
            <div className='Service-Icon'>
              <img src={ServiceIcons.Consult} alt='Web Consulting' />
            </div>
            <div className='Service-Text'>
              <h3>Web Consulting</h3>
            </div>
          </div>
        </div>
        <div>
          <Link href='/contact'>
            <button>Request A Free Quote Today</button>
          </Link>
        </div>
      </div>
    </div>
  )

type HomeData = {
  component: () => JSX.Element,
  payload: FooterProps
}[]

const HomeData: HomeData = [
  {
    component: Landing,
    payload: {
      isDynamic: true,
      title: 'Home',
      index: 1,
      length: 4,
        next: {
          title: 'Next'
        }
    }
  },
  {
    component: Pitch,
    payload: {
      isDynamic: true,
      title: 'Pitch',
      index: 2,
      length: 4,
        next: {
          title: 'Services'
        },
        previous: {
          title: 'Home'
        }
    }
  },
  {
    component: Services,
    payload: {
      isDynamic: true,
      title: 'Pitch',
      index: 3,
      length: 4,
      next: {
        title: 'Testimonies'
      },
      previous: {
        title: 'Pitch'
      }
    }
  },
  {
    component: Testimonies,
    payload: {
      isDynamic: true,
      title: 'Pitch',
      index: 2,
      length: 4,
      next: {
        title: 'Services'
      }
    }
  }
]

export default HomeData
