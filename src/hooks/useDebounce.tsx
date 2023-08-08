import { useEffect, useState } from "react"



export const useDebounce = (value:string, delay:number) => {
    const [debounceValue, setDebounceValue] = useState<string>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay || 500)
    
    return () => clearTimeout(timer);
    }, [value, delay])
    
    return {
        debounceValue,
        setDebounceValue
    }
}