import classes from './Button.module.css'
function Button({text="Get Started"}) {
  return (
    <button className={classes.btn}>
      { text }
    </button>
  )
}

export default Button
