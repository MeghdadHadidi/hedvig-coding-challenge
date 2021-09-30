import classes from './MobileNav.module.css'
import hamburgerIcon from '@/assets/img/hamburger-menu.svg'

function MobileNav() {
    return (
        <div className={classes.mobileNav}>
            <button aria-label="toggle main menu">
                <img src={hamburgerIcon} alt="Toggle main menu" />
            </button>
        </div>
    )
}

export default MobileNav