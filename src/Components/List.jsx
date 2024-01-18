import { Link } from "react-router-dom"


const List = ({text,className,to}) => {
  return (
    <li><Link className={`${className} text-sm font-dm font-normal capitalize leading-6`} to={to}>{text}</Link></li>
  )
}

export default List