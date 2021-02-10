import React from 'react'
import profilePic from '../../media/Stark-Profile-Pic.jpg'

import arrow from './graphics/arrow.svg'
import circle from './graphics/circle.svg'
import clipPath from './graphics/ClipPath.svg'
import titleText from './graphics/text.svg'


import './About.scss'

export default function About() {
  return (
    <div className='about'>
      <div className="about__profilepic">
        <img src={circle} className='about__profilepic-border' />
        {/* <img src={profilePic} className='about__profilepic-image' /> */}
      </div>
      <h1 className='about__header'>This is Sam Stark</h1>
      <p className='about__description'>
        with experience developing full-stack applications leveraging a multitude of tools including JavaScript, Python, CSS, SCSS, HTML, React / Redux, and Express and Flask backend servers.
      </p>
      <p className='about__description'>
        I have roots in live events and theater, both producing experiential events for major companies as well as designing sets and props for theater. I'm looking to take my knowledge of how people interact, problem solving on the fly, and the flow of human nature into the work of software!
      </p>
      <section>
        <h2>
          Studied At
        </h2>
        <div>
          app Academy
        </div>
        <div>
          Carnegie Mellon University
        </div>
      </section>
      <section>
        <h2>
          Worked At
        </h2>
        <div>
          NA Collective
        </div>
        <div>
          Technical Producing Group
        </div>
        <div>
          Chautauqua Theater Company
        </div>
        <div>
          Interlochen Center for the Arts
        </div>
      </section>

    </div>
  )
}
