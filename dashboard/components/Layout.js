import Nav from "./dashboard/Nav";
import SideNav from "./dashboard/SideNav";
import { useState} from "react"
const Layout = ({ content }) => {
    const [open, setOpen] =useState(true)
  return (
    <>
      <Nav setOpen={setOpen} open={open} />
      <main className="flex flex-row">
            {open ?<SideNav />: ''} 
            {content}
      </main>
    </>
  );
};

export default Layout;
