import { Peril } from "@/store/types"

import classes from './PerilDetails.module.css'

interface PerilDetailsProps {
    peril: Peril | null
}

function PerilDetails({ peril }: PerilDetailsProps) {
    if(!peril) return null;

    return (
        <div className={classes.perilDetailsWrapper}>
            <img src={peril.icon.variants.light.svgUrl} alt={peril.title} />
            <h3>{peril.title}</h3>
            <p>{peril.description}</p>
            
            {peril.exceptions?.length && (
                <>
                    <h4>Coverage</h4>
                    <ul>
                        {peril.covered.map((coverage, key) => (
                            <li key={key}>{coverage}</li>
                        ))}
                    </ul>
                </>
            )}

            {peril.exceptions?.length && (
                <>
                    <h4>Exceptions</h4>
                    <ul>
                        {peril.exceptions.map((exception, key) => (
                            <li key={key}>{exception}</li>
                        ))}
                    </ul>
                </>
            )}

            <details>
                <summary>{peril.shortDescription}</summary>
                <p>{peril.info}</p>
            </details>
        </div>
    )
}

export default PerilDetails