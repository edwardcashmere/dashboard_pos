import Nav from "./dashboard/Nav"
import SideNav from "./dashboard/SideNav"
const Layout = ({content}) => {
    return (
        <>
            <Nav/>
            <main className="flex flex-row">
                <SideNav/>
                {content}
            </main>
        </>
    )
}

export default Layout
