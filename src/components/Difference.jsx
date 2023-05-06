import classes from './Difference.module.css'
function Difference({ number, title, details }) {
  return (
    <li className={classes.difference}>
        <h2 className={classes.difference__title}>
            <span className={classes.difference__number}><span>{ number }</span></span>{ title }
        </h2>
        <p className={classes.details}>{ details }</p>
    </li>
  )
}

export default Difference
