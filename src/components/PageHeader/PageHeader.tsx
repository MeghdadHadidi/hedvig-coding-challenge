import classes from './PageHeader.module.css'
import logoUrl from '@/assets/img/logo.svg'

function PageHeader() {
    return (
        <header>
            <div>
                <a className={classes.brand} href="/" aria-label="Hedvig">
                    <img src={logoUrl} alt="Hedvig Logo" />
                </a>
            </div>
        </header>
    )
}

export default PageHeader