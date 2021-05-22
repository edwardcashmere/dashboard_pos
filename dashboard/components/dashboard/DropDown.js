import DropDownItem from "./DropDownItem"
const DropDown = ({name, path}) => {
    return (
        <div className="bg-white shadow w-64 h-10">
            <ul className="list-reset">
                <div>
                    <DropDownItem title={name} path={path}/>
                </div>
            </ul>      
        </div>
    )
}

export default DropDown
