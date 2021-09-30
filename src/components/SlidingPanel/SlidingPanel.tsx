import { ReactChild } from "react"
import classes from './SlidingPanel.module.css'
import closeIcon from '@/assets/img/close.svg'

interface SlidingPanelProps {
    visible: boolean;
    children: ReactChild;
    onPaneHidden: Function;
}

function SlidingPanel({ visible, children }: SlidingPanelProps) {
    return (
        <div className={`${classes.paneWrapper} ${visible && classes.visible}`}>
            <button className={classes.closeButton} aria-label="Close side panel">
                <img src={closeIcon} alt="close side panel" />
            </button>
            <aside className={`${classes.paneBody} ${visible && classes.visible}`}>
                {children}
            </aside>
        </div>
    )
}

export default SlidingPanel