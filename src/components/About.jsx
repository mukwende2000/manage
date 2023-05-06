import classes from './About.module.css'
import data from '../data'
import Difference from './Difference'

function About() {
  return (
    <section className={classes.about}>
      <div className={`${classes.about__container} container row--desktop`}>
          <div>
              <h2 className={classes.about__header}>What is different about Manage</h2>
              <p className={classes.about__desc}>
                  Manage provides all the functionallity 
                  your team needs, without complexity.
                  Our software is tailor made for mordern
                  digital product teams.
              </p>
          </div>
          <ul className={classes.ul}>
              <Difference number={data[1].number} details={data[1].details} title={data[1].title} />
              <Difference number={data[2].number} details={data[2].details} title={data[2].title} />
              <Difference number={data[3].number} details={data[3].details} title={data[3].title} />
          </ul>
      </div>
    </section>
  )
}

export default About
