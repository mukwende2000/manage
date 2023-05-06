import classes from './ListItem.module.css'

function ListItem({ title, color }) {
  return (
    <li className={classes.nav__item}>
        <a style={{ color }} href="">{title}</a>
    </li>
  )
}

export default ListItem
