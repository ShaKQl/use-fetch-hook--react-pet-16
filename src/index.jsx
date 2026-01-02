import { useEffect } from "react";
import { useState } from "react";



export default function useFetch(url, options={}){

    const [data, setData ] = useState(null)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState('')

    async function fetchData(){
        try {
            setPending(true)
            const res = await fetch(url)
            if(!res.ok) throw new Error (res.statusText)

            const data = await res.json()
            setData(data)
            setError(null)
        } catch (error) {
            setError(`url: ${url}: ${error}`)
                           
        }
        finally{
            setPending(false)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [url])

    return {data, pending, error}
}













