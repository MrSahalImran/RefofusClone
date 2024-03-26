import React from 'react'

const Footer = () => {
  return (
    <div className='w-full select-none'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11rem] tracking-tight font-medium leading-none'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-20'>
                <div>
                    <h1 className='mb-10 capitalize text-2xl'>socials</h1>
                    {["instagram","twitter","Linkedlin"].map((item,index)=><a key={index} className='block mt-2 text-gray-500 capitalize'>{item}</a>)
                    }
                </div>
                <div>
                <h1 className='mb-10 text-2xl'>Stops</h1>
                    {["Home","Work","Contact","Connect"].map((item,index)=><a  key={index} className='block mt-2 text-gray-500 capitalize'>{item}</a>)
                    }
                </div>
                <div className='relative w-[80%]'>
                    <p className='tracking-tight text-right '>Refokus is a pioneering digital agency driven by design and empoweered by technology</p>
                    <button className='px-3 absolute py-2 bg-blue-500 mt-10 right-0'>Start a Project</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer