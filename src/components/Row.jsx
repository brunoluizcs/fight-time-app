import React, { useEffect, useState } from 'react'
import { categories } from '../data/mockCategories'
import RowItem from './RowItem'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


function Row({rowId, title, fetchURL}) {
    const [myCategories, setMyCategories] = useState([])
    useEffect(() => {
        setMyCategories(categories)
    }, [fetchURL])

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft
        size={40}
        className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        onClick={slideLeft}
        />
        <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {categories?.map((item, id) => (
                <RowItem item={item}/>
            ))}
        </div>
        <MdChevronRight
        size={40}
        className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        onClick={slideRight}
        />
    </div>
    </>
  )
}

export default Row
