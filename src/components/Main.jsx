import axios from 'axios'
import React, { useEffect, useState} from 'react'
import requests from '../Request'
import { categories } from '../data/mockCategories'




function Main() {
    const [myCategories, setMyCategories] =  useState([])
    const category = myCategories[Math.floor(Math.random() * myCategories.length)]

    useEffect(() => {
        // axios.get(requests.requestCategory).then((response) => setMovies(response.data))
        var promise = new Promise( (resolve, reject) => {
            resolve(categories)
        })
        promise.then( result => { setMyCategories(categories) })
    }, [])
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={category?.img} alt={category?.name} />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3x1 md:text-5x1 font-bold'>{category?.name}</h1>
                <div className='my-4'>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                <button className='border text-white border-gray-300 py-2 px-5 ml-4'>watch later</button>
                </div>
                <p className='w-full md:max-w-[78%] lg:max-w-[35%] text-gray-200'>{category?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Main
