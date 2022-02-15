import Link from "next/link"
import Portal from "../Portal";
import DrawerItem from "./DrawerItem";
import { CATEGORIES } from '../../assets/data';



const SideDrawer = ({drawerOpen, clicked}) => {

    return (
        <Portal selector="#modal">
            <aside onClick={clicked} className={`fixed ${ drawerOpen ? '-translate-x-full': 'translate-x-0'} top-0 left-0 w-full h-full z-20 bg-gray-800 bg-opacity-50`} >
                <div onClick={(e) => e.stopPropagation()} className={`absolute top-0 left-0 w-80 transition-transform duration-500 transform ease-in-out flex flex-col justify-between min-h-screen bg-white`}>
                    <div className="w-full p-6 border-b border-gray-200">
                        <div className="p-4 text-center">
                            <button className="w-full rounded-md font-bold text-sm focus:outline-none py-3 text-white text-opacity-60 bg-pri hover:bg-opacity-95 hover:text-opacity-80">
                                <Link href='/login'>Login</Link>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <ul className="py-2">
                            {
                                CATEGORIES.map((item,idx) => <DrawerItem key={idx} {...item}  />)
                            }
                        </ul>
                    </div>
                    <div className="w-full border-t text-xs p-3 border-gray-100 text-gray-700">
                        &copy; 2022 Glamour World Limited
                    </div>
                </div>
            </aside>
        </Portal>
    )
};

export default SideDrawer;