
import { useState, useEffect } from 'react';

export const useAsync=(asyncFn,dependencias)=>{
    const [data, setData] = useState()
    const [error, setError] = useState()
    const[isloading,setLoading]=useState(true)
    if(!Array.isArray(dependencias)){
        dependencias = []
    }
    useEffect(() => {
        setLoading(true);
        asyncFn().then(data=>{
            setData(data)
        }).catch(error=>{
            setError(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [...dependencias])//eslint-disable-line
    return {
        data,
        error,
        isloading
    }
}