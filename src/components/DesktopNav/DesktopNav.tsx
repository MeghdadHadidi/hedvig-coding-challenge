import classes from './DesktopNav.module.css'

function DesktopNav() {
    return (
        <nav className={classes.navContainer}>
            <ul>
                <li>
                    <span>Why Hedvig</span>
                </li>
                <li>
                    <a href="https://www.hedvig.com/se-en/insurances">Insurances</a>
                </li>
                <li>
                    <a href="/se-en/the-hedvig-app">The Hedvig App</a>
                </li>
                <li>
                    <span>Help</span>
                </li>
            </ul>
            <a className={classes.getQuoteButton} href="https://www.hedvig.com/se-en/new-member">Get a price quote</a>
        </nav>
    )
}

export default DesktopNav