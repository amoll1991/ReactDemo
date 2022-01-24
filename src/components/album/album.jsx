import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function Album(){
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums').then((response) => {
            setRes(response.data)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <h2>Wait while data is loading !!!</h2>
    }
    return(
        <div>
            <h2> Album List </h2>
            {data.map((item, index) => {
                return <p key= {index}>{item.title}</p>
            })}
        </div>
    )
}