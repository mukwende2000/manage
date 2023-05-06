import classes from './Cta.module.css'
import Button from "./Button"

function Cta() {
  return (
    <section className={classes.cta}>
        <div className={`${classes.cta__container} container row--desktop`}>
            <h1>simplify how your team works today</h1>        
            <Button alwaysShow />
        </div>
    </section>
  )
}

export default Cta
