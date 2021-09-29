import { PageHeader } from '@/components'
import classes from './TopBanner.module.css'

type TopBannerProps = {
    title: string;
    description?: string | string[];
}

function TopBanner({ title, description }: TopBannerProps) {
    return (
        <section className={classes.topBanner}>
            <PageHeader />
            <div>
                <h1>{title}</h1>
            </div>
            {description && <div>
                <p>{description}</p>
            </div>}
            <div className={classes.getQuoteButtonContainer}>
                <a className={classes.getQuoteButton} href="/" aria-label="Get a price quote">Get a price quote</a>
            </div>
        </section>
    )
}

export default TopBanner