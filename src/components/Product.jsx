import React from 'react'
import CustomeButton from './CustomeButton'

const Product = ({data,mover,index}) => {
  return (
    <div className='w-full py-20 h-[23rem] text-white'>
        <div onMouseEnter={()=>{mover(index)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-medium'>{data.title}</h1>
            <div className='details w-1/3'>
                <p className='mb-10'>{data.description}</p>
                <div className='flex items-center gap-3'>
                {data.live && <CustomeButton title='Live Website'/>}
                {data.case && <CustomeButton title='Case Study' />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product