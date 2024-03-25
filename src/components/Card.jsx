import React from "react"
import { FaChevronRight } from "react-icons/fa"

const Card = ({ width, start, para,hoverCol }) => {

  return (
    <div className={` ${width} p-5 rounded-xl ${para && (`hover:bg-zinc-700`)} bg-zinc-800 ${start && (`hover:bg-violet-700`)}  flex flex-col justify-between min-h-[18rem]`}>
      <div className={`w-full`}>
        <div className="w-full flex justify-between items-center">
          <h3>one heading </h3>
          <FaChevronRight className="w-10" />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever heading.</h1>
      </div>
      <div className="down w-full mt-60">
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
        )}
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 border mt-5">
              Contact Us
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Card
