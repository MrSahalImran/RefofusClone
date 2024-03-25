import React from "react"
import { BiSubdirectoryRight } from "react-icons/bi";
const CustomeButton = ({ title="Get Started" }) => {
  return (
    <div className='w-fit min-w-[9vw] sm:min-w-[100px] h-[2.2vw] bg-zinc-200  flex items-center text-zinc-900 font-["work sans"] py-1 rounded-full justify-evenly'>
      <span className="ml-[1vw] text-nowrap font-normal text-[1vw]">
        {title}
      </span>
      <BiSubdirectoryRight className="w-10" />
    </div>
  )
}

export default CustomeButton
