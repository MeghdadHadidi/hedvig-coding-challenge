import useEscapeKey from "@/hooks/useEscapeKey"
import { RefObject, ReactChild, useRef } from "react"
import classes from './SlidingPanel.module.css'
import closeIcon from '@/assets/img/close.svg'

interface SlidingPanelProps {
    visible: boolean;
    children: ReactChild;
    onPanelHidden: Function;
}

function SlidingPanel({ visible, children, onPanelHidden }: SlidingPanelProps) {
    const paneBodyRef: RefObject<HTMLDivElement> = useRef(null);

    useEscapeKey(onPanelHidden)

    const handleOverlayClick = (element: EventTarget) => {
        if(element !== paneBodyRef.current && !paneBodyRef.current?.contains(element as Node)) {
            onPanelHidden()
        }
    }
    
    return (
        <div onClick={(e) => handleOverlayClick(e.target)} className={`${classes.paneWrapper} ${visible && classes.visible}`}>
            <button className={classes.closeButton} aria-label="Close side panel">
                <img src={closeIcon} alt="close side panel" />
            </button>
            <aside ref={paneBodyRef} className={`${classes.paneBody} ${visible && classes.visible}`}>
                {children}
            </aside>
        </div>
    )
}

export default SlidingPanel