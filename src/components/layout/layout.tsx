import React from "react"
import Head from "next/head"
import styled from '@emotion/styled'
import Nav from './nav'
import Footer from './footer'
import { LayoutComponentProps } from '../../custom-types/layout'
import Particles  from "react-particles-js"
import Config from "../../utils/particles-configs"

const Container = styled('div')`
  display: grid;
  grid-template-columns: 6% 94%;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .Content {
    overflow: scroll
  }

  .Page-Container {
    padding: 15px 25px;
    height: 100%;
    box-sizing: border-box;
  }

  #tsparticles {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  h2, h3, h4, h5, h6 {
    font-family: 'Maven Pro';
  }
`

const Layout: React.FC<LayoutComponentProps> = props => {
  const { payload, children, setPayload, headerTitle } = props

  return (
    <>
      <Head>
        <title>Anthony Gayflor | {headerTitle}</title>
        <link href="https://fonts.googleapis.com/css?family=Maven+Pro|Marmelad" rel="stylesheet"></link>
      </Head>
      
      <Container className="Layout">
          <Nav />
          <div className="Content">
            <Particles 
              params={Config} 
              style={{ 
                background: `url(./images/backgrounds/home.jpeg)`,
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center 60%' }}
              />
            <div className='Page-Container'>
              { children }
              <Footer {...payload} setPayload={setPayload} />
            </div>
          </div>
      </Container>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          height: auto;
        }
      `}</style>
    </>
  )
}

export default Layout