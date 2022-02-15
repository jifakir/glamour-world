import * as React from 'react';
import Image from 'next/image';
import logo from '../../assets/img/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillFolderAdd } from 'react-icons/ai';


const AdminLayout = ({children}) => {

    return (
        <div className="w-full">
            <div className="w-full bg-pri-dark">
                <div className="container mx-auto flex justify-between items-center py-2 text-white">
                    <div className="">
                        <div className="text-2xl cursor-pointer">
                            <GiHamburgerMenu />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-xs px-5">
                            <h2 className="text-sec">Good Morning,</h2>
                            <h1 className="">Jahidul Islam Fakir</h1>
                        </div>
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image src={logo} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar for AdminLayout */}
            <div className="w-full flex">
                <div className="w-52 min-h-screen bg-gray-50 shadow-lg text-pri pl-5">
                    <ul className="pt-5">
                        <li className="hover:text-sec cursor-pointer">
                            <a href="/admin/add-product" className="flex items-center">
                                <div className="text-xl pr-3">
                                    <AiFillFolderAdd />
                                </div>
                                <p className="text-sm">Add Product</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="grow">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;