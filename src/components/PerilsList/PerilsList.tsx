import { useState, useMemo } from 'react'
import usePerils from "./usePerils"
import { PerilItem, SlidingPanel, PerilDetails } from "@/components"
import loadingSpinner from '@/assets/img/eclipse-98px.svg'

import classes from './PerilsList.module.css'
import { Peril } from "@/store/types"

const PerilsList = () => {
    const [activePeril, setActivePeril] = useState<Peril | null>(null)
    const { perils, isLoading, error } = usePerils()

    const isDetailVisible = useMemo(() => !!activePeril, [activePeril])

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

            <SlidingPanel onPanelHidden={() => setActivePeril(null)} visible={isDetailVisible}>
                <PerilDetails peril={activePeril} />
            </SlidingPanel>
        </section>
    )
}

export default PerilsList