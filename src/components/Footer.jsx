import Button from "./Button"
import classes from './Footer.module.css'
import ListItem from "./ListItem"
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import youtube from '../assets/images/icon-youtube.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'
import logo from '../assets/images/logo.svg'

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`container row--desktop ${classes.footer__container}`}>
        <div className={`${classes.footer__action} row--mobile row--desktop`}>
          <div>
            <input className={classes.footer__action__input} type="text" placeholder="Updates in your inbox" />
            <Button text="Go" alwaysShow />
          </div>
          <p>&copy; Copyright 2020; All rights reserved.</p>
        </div>
        <div className={`${classes.footer__links} row--mobile`}>
            <ul className={classes.footer__links__one}>
                <ListItem color="white" title="Home" />
                <ListItem color="white" title="Pricing" />
                <ListItem color="white" title="Products" />
                <ListItem color="white" title="About us" />
            </ul>
            <ul className={classes.footer__links__two}>
                <ListItem color="white" title="Careers" />
                <ListItem color="white" title="Community" />
                <ListItem color="white" title="Privacy Policy" />
            </ul>
        </div>
        <div className={`${classes.footer__handles} row--desktop`}>
            <div className={`row--mobile ${classes.footer__handles__main}`}>
                <img src={facebook} alt="Facebook icon" />
                <img src={youtube} alt="Youtube icon" />
                <img src={twitter} alt="Twitter icon" />
                <img src={pinterest} alt="Pinterest icon" />
                <img src={instagram} alt="Instagram icon" />
            </div>
            <img className={classes.footer__handles__logo} src={logo} alt="Manage logo" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
