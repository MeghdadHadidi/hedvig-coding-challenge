import { DesktopNav } from '@/components'
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
            <DesktopNav />
        </header>
    )
}

export default PageHeader