import usePerils from "./usePerils"
import loadingSpinner from '@/assets/img/eclipse-98px.svg'

import classes from './PerilsList.module.css'

const PerilsList = () => {
    const { perils, isLoading, error } = usePerils()

    return (
        <section className={classes.perilsContainer}>
            <h2>Our Coverage</h2>
            
            {error && <div>
                Error while loading perils
            </div>}

            {isLoading && <div>
                <img src={loadingSpinner} alt="Loading insurances" />
            </div>}
            
            <div className={classes.perilsGrid}>
                {perils && perils.map((peril, index) => (
                    <div key={index}>{peril.title}</div>
                ))}
            </div>
        </section>
    )
}

export default PerilsList