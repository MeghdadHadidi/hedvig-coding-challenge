import { useEffect, useRef } from "react"

function useEscapeKey(callback: Function) {
    const callbackRef = useRef(callback)

    useEffect(() => {
        const handleEscapeKey = (e: KeyboardEvent) => {
            if(e.code !== 'Escape') return;
            callbackRef.current(e)
        }

        document.addEventListener('keyup', handleEscapeKey, true)

        return () => {
            document.removeEventListener('keyup', handleEscapeKey, true)
        }
    }, [callbackRef])
}

export default useEscapeKey