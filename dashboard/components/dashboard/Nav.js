import {
  MenuIcon,
  BeakerIcon,
  BriefcaseIcon,
  ArrowsExpandIcon,
  UserCircleIcon,
  GlobeAltIcon,
  BellIcon,
  ChevronDownIcon
} from "@heroicons/react/outline";
const Nav = () => {
  return (
    <nav className="flex justify-between  border-b-2 shadow-sm p-3">
      {/* hamburger control opening and closing of side nav  */}
      <div className="flex items-center link">
        <MenuIcon className="h-8 text-blue-600" />
      </div>
      <div className="flex items-center p-2 link ">
        <BeakerIcon className="h-10 text-blue-600" />
        <h3 className="ml-2 text-2xl text-gray-600 font-semibold"><a href="/">Expivot</a></h3>
      </div>
      <div className="flex space-x-5">
        <div className="flex items-center">
          <div className=" p-2 ml-2 flex flex-row rounded-md hover:bg-gray-400 items-center border shadow-md link ">
            <BriefcaseIcon className="h-4 text-blue-600" />
            <p className="ml-2 text-sm ">ExP</p>
          </div>
        </div>
        <div className="flex items-center link">
            <ArrowsExpandIcon className="h-5 text-blue-600"/>
        </div>
        <div className="flex items-center link">
            <BellIcon className="h-4 text-blue-600"/>
        </div>
        <div className="flex items-center link">
            <GlobeAltIcon className="h-4 text-blue-600"/>
            <p className="text-sm ml-1">Language</p>
            <ChevronDownIcon className=" ml-1 h-3"/>
        </div>
        <div className="flex items-center link">
            <UserCircleIcon className="h-4 text-blue-600"/>
            <p className="text-sm ml-1">User</p>
            <ChevronDownIcon className=" ml-1 h-3 "/>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
