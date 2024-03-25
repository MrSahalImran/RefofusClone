import React from "react"
import CustomeButton from "../components/CustomeButton"

const Navbar = () => {
  return (
    <div className="max-w-[95%] px-5 py-6  mx-auto flex items-center justify-between border-b border-zinc-700">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-24">
          {["Home", "Work", "Contact", "|", "News"].map((item, index) => (
            <a key={index}
              className={`text-sm flex items-center gap-1 ${
                index == 3 ? "text-zinc-600 text-2xl font-thin" : ""
              }`}
            >
              {index == 1 && (
                <span
                  style={{ boxShadow: "0 0 1em #00FF00" }}
                  className="z-10 inline-block w-1 h-1 rounded bg-green-500"
                ></span>
              )}
              {item}
            </a>
          ))}
        </div>
      </div>
      <CustomeButton title="Start a Project" />
    </div>
  )
}

export default Navbar
