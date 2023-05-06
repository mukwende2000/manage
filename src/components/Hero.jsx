import classes from './Hero.module.css'
import illustration from '../assets/images/illustration-intro.svg'
import Button from './Button'

function Hero() {
  return (
    <section className={classes.hero}>
        <div className={`container row--desktop ${classes.hero__container}`}>

            <div className={classes.hero__img}>
                <img src={illustration} alt="illustration" />
            </div>
            <div className={classes.hero__text}>
                <h1 className={classes.hero__header}>Bring everyone together to build better products</h1>
                <p className={classes.hero__desc}>
                    Manage makes it simple for software teams to build day to day
                    tasks while keeping the larger team goals in sync.
                </p>
                <Button />   
            </div>   

        </div>
    </section>
  )
}

export default Hero
