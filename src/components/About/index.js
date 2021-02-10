import React from 'react'
import profilePic from '../../media/Stark-Profile-Pic.jpg'

export default function About() {
  return (
    <div>
      <img src={profilePic} />
      <h1>This is Sam Stark</h1>
      <p>
        with experience developing full-stack applications leveraging a multitude of tools including JavaScript, Python, CSS, SCSS, HTML, React / Redux, and Express and Flask backend servers.
      </p>
      <p>
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
