import { IoIosArrowForward } from "react-icons/io"

const Action = ({ link, image, title, text }) => {
  return(
    <a className="flex items-center gap-3" href={link}>
      <img src={image} height="48" width="48"  alt="" />
      <div>
        <h4 className="text-jacobs text-lg font-bold">{title}</h4>
        <p className="flex items-center">{text} <IoIosArrowForward className="text-slate-500"/></p>
      </div>
    </a>
  )
}

export default Action