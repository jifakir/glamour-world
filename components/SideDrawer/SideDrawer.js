import Link from "next/link"
import Portal from "../Portal";
import DrawerItem from "./DrawerItem";




const SideDrawer = ({drawerOpen, clicked}) => {

    return (
        <Portal selector="#modal">
            <aside onClick={clicked} className={`fixed ${ drawerOpen ? '-translate-x-full': 'translate-x-0'} top-0 left-0 w-full h-full z-50 bg-gray-800 bg-opacity-50`} >
                <div className={`absolute top-0 left-0 w-80 overflow-auto transition-transform duration-500 transform ease-in-out flex flex-col justify-between min-h-screen bg-white`}>
                    <div className="w-full p-6 border-b border-gray-200">
                        <div className="p-4 text-center">
                            <button className="w-full rounded-md font-bold text-sm focus:outline-none py-3 border-red-700 border text-red-700 bg-red-50">
                                <Link href='/login'>Login</Link>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <ul className="py-2">
                            {
                                ['Desktop', 'Laptop', 'Mens watch', 'Microwave Oven', 'Motorbike', 'Refrigerator', 'Smartphone', 'Smart Tv & Android Tv', 'Speaker', 'Split Ac'].map((item,idx) => <DrawerItem key={idx} title={item}  />)
                            }
                        </ul>
                    </div>
                    <div className="w-full border-t p-3 border-gray-100 text-gray-700">
                        &copy; E-valy.com limited 2021
                    </div>
                </div>
            </aside>
        </Portal>
    )
};

export default SideDrawer;