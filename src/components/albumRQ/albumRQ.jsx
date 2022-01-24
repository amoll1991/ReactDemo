import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export function AlbumRQ(){
    const { isLoading, data } = useQuery('album-query', () => {
       return axios.get('https://jsonplaceholder.typicode.com/albums')
    })

    if(isLoading) {
        return <h2>Please wait while data is loading...</h2>
    }
    console.log(data);
    return(
        <div>
            <h2>Album List</h2>
            {data.data.map((item, index) => {
                return <p key= {index}>{item.title}</p>
            })}
        </div>
    )
}