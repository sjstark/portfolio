import React from 'react'
import resume from '../../media/STARK_SAM_RESUME.pdf'

export default function Contact() {
  return (
    <div>
      <div>
        <a href={resume} download>Resume</a>
      </div>
      <div>
        <a href={"https://www.linkedin.com/in/samueljamesstark/"} >LinkedIn</a>
      </div>
      <div>
        <a href={"https://github.com/sjstark"} >Github</a>
      </div>
      <div>
        <a href={"https://angel.co/u/sjstark"} >AngelList</a>
      </div>
    </div>
  )
}
