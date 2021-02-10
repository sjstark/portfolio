import React from 'react'
import boothItPic from '../../media/booth-it-pic.gif'
import supDogPic from '../../media/sup-dog-pic.gif'
import scareBnbPic from '../../media/sup-dog-pic.gif'
import neverForgetPic from '../../media/never-forget-pic.png'

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section>
        <h2>Booth It</h2>
        <h3>January 2021</h3>
        <p>Booth It is a web app for hosting conference events online. Events are split into individual "booths" to encourage more meaningful conversations.</p>
        <img src={boothItPic} />
      </section>
      <section>
        <h2>'SupDog</h2>
        <h3>November 2020</h3>
        <p>'SupDog is an events forum designed to help schedule and spread knowledge of events. 'SupDog is a clone that uses Eventbrite as content inpiration and Popdog as style inspiration.</p>
        <img src={supDogPic} />
      </section>
      <section>
        <h2>ScareBnB</h2>
        <h3>January 2021</h3>
        <p>Scarebnb is a web service that allows users to get their spook on by booking stays at known haunted properties.</p>
        <img src={scareBnbPic} />
      </section>
      <section>
        <h2>Never Forget</h2>
        <h3>November 2020</h3>
        <p>Never Forget, a Remember the Milk clone, is an app designed to sort and organize your to-do tasks.</p>
        <img src={neverForgetPic} />
      </section>
    </div>
  )
}
