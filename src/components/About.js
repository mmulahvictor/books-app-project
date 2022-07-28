import React from 'react'
import './Style.css'

function About() {
  return (
      <div className='about'>
          <h1>Some motivation</h1>
          <p>
              “The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.”
              <strong>― Donald E. Knuth, Selected Papers on Computer Science</strong>
          </p><hr />
          <p>
              “Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.”
              <strong>― Rick Cook, The Wizardry Compiled</strong>
          </p>
    </div>
  )
}

export default About