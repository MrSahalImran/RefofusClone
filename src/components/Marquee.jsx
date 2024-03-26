import React from "react"

const Marquee = ({ imgurl }) => {
  return (
    <div className="flex py-8 gap-20 whitespace-nowrap overflow-hidden w-full">
      {imgurl.map((url,index) => (
        <img key={index} src={url} className="w-[6vw] flex-shrink-0" />
      ))}
      {imgurl.map((url,index) => (
        <img key={index} src={url} className="w-[6vw] flex-shrink-0" />
      ))}
    </div>
  )
}

export default Marquee
