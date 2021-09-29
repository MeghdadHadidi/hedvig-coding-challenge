import axios, { AxiosError } from 'axios'
import { useStore, useDispatch } from "@/store"
import { useCallback, useEffect, useState } from "react"

const axiosClient = axios.create({
    baseURL: 'https://hedvig-staging-rest-api.vercel.app/api'
})

function usePerils() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<null | AxiosError>(null)

    const { perils = [] } = useStore()
    const dispatch = useDispatch()

    const fetchPerils = useCallback(async () => {
        setIsLoading(true)
        
        try {
            const { data } = await axiosClient.get('/perils', {
                params: {
                    contractType: 'SE_APARTMENT_RENT',
                    locale: 'en_SE'
                }
            })

            dispatch({
                type: 'SET_PERILS',
                payload: data
            })

        } catch(error: any) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [setIsLoading, setError])


    useEffect(() => {
        fetchPerils()
    }, [fetchPerils])

    return {
        perils,
        isLoading,
        error
    }
}

export default usePerils