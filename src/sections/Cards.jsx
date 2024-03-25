import React from 'react'
import Card from '../components/Card'

const Cards = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
            <Card hoverCol={'bg-purple-500'} width={"basis-1/3"} start={false} para={true} />
            <Card hoverCol={'bg-purple-500'} width={"basis-2/3"} start={true} para={false} />
        </div>
    </div>
  )
}

export default Cards