import classes from './BackDrop.module.css'

function BackDrop({ onSetMenuIsOpen }) {
  return (
    <div className={classes.backdrop} onClick={onSetMenuIsOpen}></div>
  )
}

export default BackDrop
