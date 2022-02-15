import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



const Nav = ({clicked}) => {

    const [dropdown, setDropdown] = useState(false);

    const router = useRouter();
    
    return(
        <nav className="w-full bg-pri shadow-lg text-white">
            <div className="container h-12 mx-auto px-2 hidden md:flex justify-between items-center">
                <div className="min-h-full w-1/5 flex pr-6 items-center text-white">
                    <button onClick={clicked} className="focus:outline-none mr-6 text-3xl text-sec">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                    </button>
                    {/* <div className="flex items-center">
                        <span className="mr-8 text-lg font-medium">CATEGORIES</span>
                        <span className="text-xl">
                            <svg className="text-xl" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                    </div> */}
                </div>
                <div className="nav-items text-sm text-white">
                    <ul className="flex justify-between items-center font-base">
                        <li className="group relative mx-2">
                            <Link href="/products" >
                                All Shops
                            </Link>
                            <div className={`absolute group-hover:block w-full h-1 -bottom-3.5 bg-sec transition-all duration-75 ease-in-out ${router.pathname === '/products' ? 'block' : 'hidden'}`}></div>
                        </li>
                        <li className="group relative mx-2">
                            <Link href="/giftcard" >
                                Gift Card
                            </Link>
                            <div className={`absolute group-hover:block w-full h-1 -bottom-3.5 bg-sec transition-all duration-75 ease-in-out ${router.pathname === '/giftcard' ? 'block' : 'hidden'}`}></div>
                        </li>
                        <li className="group relative mx-2">
                            <Link href="/campaigns" >
                                Campaigns
                            </Link>
                            <div className={`absolute group-hover:block w-full h-1 -bottom-3.5 bg-sec transition-all duration-75 ease-in-out ${router.pathname === '/campaigns' ? 'block' : 'hidden'}`}></div>
                        </li>
                        <li className="group relative mx-2">
                            <Link href="/express" >
                                Express
                            </Link>
                            <div className={`absolute group-hover:block w-full h-1 -bottom-3.5 bg-sec transition-all duration-75 ease-in-out ${router.pathname === '/express' ? 'block' : 'hidden'}`}></div>
                        </li>
                        <li className="group relative mx-2">
                            <Link href="/cyclone" >
                                Cyclone
                            </Link>
                            <div className={`absolute group-hover:block w-full h-1 -bottom-3.5 bg-sec transition-all duration-75 ease-in-out ${router.pathname === '/cyclone' ? 'block' : 'hidden'}`}></div>
                        </li>
                    </ul>
                </div>
                <div className="py-1 flex items-center text-sm font-light">
                    <div className="group text-white text-2xl cursor-pointer">
                        <svg onClick={() => setDropdown(prev => !prev)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                        <div className={`absolute right-14 z-30 top-full shadow-lg rounded-sm text-sm bg-white w-32 ${dropdown ? 'block' : 'hidden'}`}>
                            <ul className=" text-pri font-medium p-3">
                                <li className="hover:text-sec">Feeds</li>
                                <li className="hover:text-sec">Merchent</li>
                                <li className="hover:text-sec">Help</li>
                            </ul>
                        </div>
                    </div>
                    {/* <ul className="hidden xl:flex font-bold">
                        <li className="px-6 py-3">
                            <Link href="/feeds">
                                Feeds
                            </Link>
                        </li>
                        <li className="px-6 py-3">
                            <Link href="/marchent">
                                Marchent
                            </Link>
                        </li>
                        <li className="px-6 py-3">
                            <Link href="/help">
                                Help
                            </Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>
    )
};

export default Nav;