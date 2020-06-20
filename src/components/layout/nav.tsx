import React from "react";
import Link from "next/link";
import styled from '@emotion/styled'

import Logo from '../../../public/images/icons/logo.svg'

import TwitterIcon from '../../../public/images/icons/social/twitter.svg'
import InstagramIcon from '../../../public/images/icons/social/instagram.svg'
import GithubIcon from '../../../public/images/icons/social/github.svg'

import Home from '../../../public/images/icons/layout/home.svg'
import About from '../../../public/images/icons/layout/about.svg'
import Projects from '../../../public/images/icons/layout/projects.svg'
import Blog from '../../../public/images/icons/layout/blog.svg'
import Contact from '../../../public/images/icons/layout/contact.svg'

const NavLink = styled.a`
  margin: 20px 0;
  display: block;

  :hover {
    cursor: pointer;
  }

  h5:hover {
    color: #a265f5;
  }

  h5 {
    color: white;
    margin-top: 2px;
  }
`

const Links = styled('div')`
  margin: 30px 0;
`

const Container = styled('div')`
  width: 100%;
  text-align: center;
  height: 100%;
  background-color: #0f0f0f;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-rows: 20% 55% 25%;
  box-shadow: -10px -2px 13px -7px #000, 10px -2px 13px -7px #000, 5px -10px 15px 5px transparent;
  z-index: 1;

  .Brand-Logo h5 {
    color: white;
    margin: 0;
  }

  .Social {
    margin-top: auto;
    text-align: center;
    padding-bottom: 15px;
  }

  .Social a {
    display: block;
    margin: 15px 0;
  }
`


const Nav: React.FC = () => {
  return (
    <Container className="Nav">
        <div className="Brand-Logo">
          <Logo />
        </div>
        <Links className="Links">
          <Link href="/">
            <NavLink>
              <Home />
              <h5>Home</h5>
            </NavLink>
          </Link>
          <Link href="/about">
            <NavLink>
              <About />
              <h5>About</h5>
            </NavLink>
          </Link>
          <Link href="/projects">
            <NavLink>
              <Projects />
              <h5>Projects</h5>
            </NavLink>
          </Link>
          <Link href="/blog">
            <NavLink>
              <Blog />
              <h5>Blog</h5>
            </NavLink>
          </Link>
          <Link href="/contact">
            <NavLink>
              <Contact />
              <h5>Contact</h5>
            </NavLink>
          </Link>
        </Links>
        <div className="Social">
          <a href="https://twitter.com/DevGayflor">
            <TwitterIcon />
          </a>
          <a href="https://Instagram.com/anthony.gflor">
            <InstagramIcon />
          </a>
          <a href="https://github.com/anthonyg56">
            <GithubIcon />
          </a>
        </div>
    </Container>
  );
};

export default Nav;
