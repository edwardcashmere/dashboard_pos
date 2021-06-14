import Link from "next/link"
const DropDownItem = ({ title, path }) => {
    console.log(path)
    return (
        <li className="group text-sm ml-10 transition-spacing ease-in-out duration-300 hover:ml-14">
           <Link href={`${path}`}><a  className="block p-2 text-gray-600 group-hover:bg-gray-100 group-hover:text-blue-600">{title}</a></Link>
        </li>
    )
}

export default DropDownItem
