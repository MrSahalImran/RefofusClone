import React from 'react'

const Stripe = ({props}) => {
    const  {url,number} = props
  return (
    <div className='w-fit gap-20 flex items-center justify-between px-4 py-5 border-t border-b border-r border-zinc-700'>
        <img className='ml-5' src={url} alt="" />
        <h1 className='font-semibold text-[1.4vw] mr-5'>{number}</h1>
    </div>
  )
}

export default Stripe