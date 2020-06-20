import React from 'react'
import Layout from "../src/components/layout/layout"
import { AboutIcons } from '../src/utils/withImage'
import { NextPage } from 'next'

const myPic = './images/me.jpeg'

const initalPayload = {
  title: 'About Me'
}

const AboutPage: NextPage = () => {

    return (
        <Layout payload={initalPayload} headerTitle="About Me">
            <div className="About-Me">
            <div className="Container">
                <div className="About">
                    <div className="Pic">
                        <img src={myPic} alt="Me" />
                        <h2>About Me</h2>
                    </div>
                    <div className="Text">
                        <p>My name's Anthony Gayflor, and I'm a freelance web developer from Indianapolis, IN. Web development is how I utilize a passion for creativity, innovation, and problem solving; helping brands and individuals turn a vision into a reality. I write code that gives clients power over their own websites, offering the full-range of customization found in traditional websites, combined with the more modern experience of a content management system (or CMS) such as Wordpress. The products I develop are user-friendly, simple to manage, professionally designed, and quick in the browser. I work closely and purposefully with my clients, with the intentions of being an asset to their bussiness & its' growth.</p>  
                    </div>  
                </div>
                <div className="Focus">
                    <div className="Title">
                        <h2>What I Focus On When Working</h2>
                    </div>
                    <div className="Highlights">
                        <div className="Section">
                            <img src={AboutIcons.BusinessGrowth} alt="growth" />
                            <h3>Business Growth</h3>
                        </div>
                        <div className="Section">
                            <img src={AboutIcons.InnovativeSolution} alt="innovation" />
                            <h3>Innovative Solutions</h3>
                        </div>
                        <div className="Section">
                            <img src={AboutIcons.WebAccessibility} alt="accessibility" />
                            <h3>Web Accessibility</h3>
                        </div>
                    </div>
                </div>
                <div className="Process">
                    <div className="Title">
                        <h2>The Process I Follow Consistently</h2>
                    </div>
                    <div className="Highlights">
                        <div className="Section">
                            <img src={AboutIcons.Visualization} alt="" />
                            <h3>1.) Visualization</h3>
                            <p>In order to achieve anything, you must first be able to see the end goal in mind that you want.</p>
                        </div>
                        <div className="Section">
                            <img src={AboutIcons.CreativeStrategizing} alt="" />
                            <h3>2.) Creative strategizing</h3>
                            <p>Different problems require different solutions, and the ability think outside the box to reach the end goal.</p>
                        </div>
                        <div className="Section">
                            <img src={AboutIcons.Execution} alt="" />
                            <h3>3.) Execution</h3>
                            <p>Once the path maped out, it's time to focus on executing the plan effeicently & deliver what is needed</p>
                        </div>    
                    </div>
                </div>
                <div className="Finisher">
                    <h2>My Mission</h2>
                    <p>We live in a day and age where it's more possible than ever to bring your ideas to life through the web. I want to be an asset for anyone with a desire to create something meaningful, along with the determination to make their ideas reality. By working together, let’s help the world see your vision.</p>
                    <br />
                    <p>
                        Feel free to send me a message at <a href="mailto:devgayflor@gmail.com">
                            <strong>devgayflor@gmail.com </strong>
                        </a>
                        for any inquiries about projects or assistance!
                    </p>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default AboutPage