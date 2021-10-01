import { Peril } from "@/store/types"

import classes from './PerilItem.module.css'

type PerilItemProps = {
    peril: Peril,
    onPerilClick: Function
}

function PerilItem({ peril, onPerilClick }: PerilItemProps) {
    return (
        <div className={classes.perilItem} onClick={() => onPerilClick(peril)}>
            <button>
                <div>
                    <img src={peril.icon.variants.light.svgUrl} alt={peril.title} />
                </div>
                <p>{peril.shortDescription}</p>
                <h4>{peril.title}</h4>
            </button>
        </div>
    )
}

export default PerilItem