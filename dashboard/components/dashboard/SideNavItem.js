import {useState} from "react";
import Dropdown from "./DropDown"
const SideNavItem = ({Icon, title,Arrow,ArrowDown, items }) => {
    const [open,setOpen]= useState(false)
    return (
        <div className="">  

            <div className="hover:bg-gray-100 flex items-center group hover:text-blue-600 p-2 link" onClick={()=>setOpen(!open)}>
                {/* Menu Icon */}
                <Icon className="h-5 ml-4 text-blue-600"/>
                <div className="flex items-center w-full justify-between">
                    <li>
                        <a href="#" className="block p-2 text-gray-500 group-hover:text-blue-600">{title}</a>
                    </li>
                    {open ? (<ArrowDown className="h-4"/>):(<Arrow className="h-4"/>)}
                </div>       

            </div>
            {open && (
                items.map((item,index)=> <Dropdown key={index} name={item} path={`/${title.toLowerCase()}/${item.split(" ").join("-").toLowerCase()}`} />)
            )}
        </div>
    )
}

export default SideNavItem
