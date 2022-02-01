import { useState } from "react";
import BottomNav from "./BottomNav";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Portal from './Portal';
import SideDrawer from "./SideDrawer/SideDrawer";



const Layout = ({children}) => {

    const [open, setOpen] = useState(false);

    const drawerHandler = () => {
        setOpen(prev => !prev);
    };

    return (
        <div className="w-full bg-gray-100">
            {
                open && <SideDrawer clicked={drawerHandler} />
            }
            <div className="sticky top-0 z-20">
                <Header clicked={drawerHandler} />
                <Nav clicked={drawerHandler} />
            </div>
            <main className="w-full mb-10">
                {children}
            </main>
            <BottomNav />
            <Footer />
        </div>
    )
};


export default Layout;