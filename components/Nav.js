import Link from 'next/link';



const Nav = ({clicked}) => {

    return(
        <nav className="w-full bg-pri shadow-lg text-sec">
            <div className="container h-12 mx-auto px-2 hidden md:flex justify-between items-center">
                <div className="min-h-full w-1/5 flex px-6 items-center cursor-pointer bg-sec text-pri-dark">
                    <button onClick={clicked} className="menu-icon focus:outline-none mr-6 text-xl">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                    </button>
                    <div className="flex items-center">
                        <span className="mr-8 text-xl font-bold">CATEGORIES</span>
                        <span className="text-xl">
                            <svg className="text-xl" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                    </div>
                </div>
                <div className="nav-items text-sm">
                    <ul className="flex justify-between items-center font-bold">
                        <li className="p-2">
                            <Link href="/products" >
                                All Shops
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href="/giftcard" >
                                Gift Card
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href="/campaigns" >
                                Campaigns
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href="/express" >
                                Express
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href="/cyclone" >
                                Cyclone
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="py-1 flex items-center text-sm font-light">
                    <div className="xl:hidden cursor-pointer">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    </div>
                    <ul className="hidden xl:flex font-bold">
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
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;