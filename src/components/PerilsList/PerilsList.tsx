import { useState } from 'react'
import usePerils from "./usePerils"
import { PerilItem } from "@/components"
import loadingSpinner from '@/assets/img/eclipse-98px.svg'

import classes from './PerilsList.module.css'
import { Peril } from "@/store/types"

const PerilsList = () => {
    const [activePeril, setActivePeril] = useState<Peril | null>(null)
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
                    <PerilItem key={index} peril={peril} onPerilClick={setActivePeril} />
                ))}
            </div>
        </section>
    )
}

export default PerilsList