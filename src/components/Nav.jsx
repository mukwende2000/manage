import logo from '../assets/images/logo.svg'
import Button from './Button'
import ListItem from './ListItem'
import hamburger from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'

import classes from './Nav.module.css'
import { useState } from 'react'
import BackDrop from './BackDrop'

function Nav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function handleClick () {
        setMenuIsOpen(prev => !prev)
    }


    return (
        <nav className={classes.nav}>
            { menuIsOpen && <BackDrop onSetMenuIsOpen={handleClick} />}
            <div className={`${classes.row} container row--mobile`}>
                <div className={classes.nav__logo}>
                    <img src={logo} alt="manage logo" />
                </div>
                <ul className={menuIsOpen ? `${classes.nav__links} ${classes.active}` : classes.nav__links } >
                    <ListItem color={"var(--primary-color)"} title="Pricing" />
                    <ListItem color={"var(--primary-color)"} title="Products" />
                    <ListItem color={"var(--primary-color)"} title="About us" />
                    <ListItem color={"var(--primary-color)"} title="Career" />
                    <ListItem color={"var(--primary-color)"} title="Community" />
                </ul>
                <Button />
                <div className={classes.nav__hamburger}>
                    <img src={menuIsOpen ? close : hamburger} alt="closing button" onClick={() => setMenuIsOpen(prev => !prev)} />
                </div>
            </div>
        </nav>
    )
}
export default Nav