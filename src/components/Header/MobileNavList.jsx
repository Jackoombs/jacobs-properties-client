import { motion, AnimatePresence } from "framer-motion"

const MobileNavList = ({ isOpen }) => {

  const navItems = [
    {
      text: "Buying",
      link : "/for-sale"
    },
    {
      text: "Renting",
      link : "/for-rent"
    },
    {
      text: "Selling",
      link : "/"
    },
    {
      text: "Landlords",
      link : "/"
    },
  ]

  return (
    <AnimatePresence>
      {isOpen &&
        <motion.ul 
          initial={{ opacity: 0, x:-100 }}
          animate={{ opacity: 1, x:0 }}
          exit={{ opacity: 0, x:-100, transition: {duration: 0.1} }}
          transition={{ ease: "easeOut" }}
          className="w-screen h-max bg-slate-50 z-10 absolute flex flex-col gap-8 justify-start px-16 py-8 left-0 top-[4.5rem]">
          {navItems.map(item => (

            <li key={item.text} className="text-jacobs">
              <a href={item.link} className="text-xl font-medium p-4">
                {item.text}
              </a>
            </li>

          ))}
        </motion.ul>
      }
    </AnimatePresence>
  )
}

export default MobileNavList