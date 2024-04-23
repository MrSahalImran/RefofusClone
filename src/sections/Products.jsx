import  { useState } from "react"
import Product from "../components/Product"
import { motion } from "framer-motion"

const Products = () => {
  const products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "layout land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
  ]

  const [pos, setPos] = useState(0)

  const mover = (val) => {
    setPos(val * 23)
  }

  return (
    <div className="relative mt-32">
      {products.map((item, index) => (
        <Product mover={mover} index={index} key={index} data={item} />
      ))}
      <div className="w-full absolute h-full pointer-events-none top-0">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1] }}
          className="w-[28rem] rounded-xl h-[23rem] absolute left-[45%] -translate-x-[50%] overflow-hidden bg-white"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1] }}
            className="w-full rounded-xl h-full bg-sky-100"
            style={{ backgroundImage: "url('/pic1.webp')", backgroundSize: "cover" }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1] }}
            className="w-full rounded-xl h-full bg-sky-200"
            style={{ backgroundImage: "url('/pic2.jpeg')", backgroundSize: "cover" }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1] }}
            className="w-full rounded-xl h-full bg-sky-300"
            style={{ backgroundImage: "url('/pic3.jpeg')", backgroundSize: "cover" }}
          ></motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1] }}
            className="w-full rounded-xl h-full bg-sky-400"
            style={{ backgroundImage: "url('/pic4.jpg')", backgroundSize: "cover" }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
