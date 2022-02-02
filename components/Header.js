import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { cartOpenHandler } from '../store/cartSlice';
import { signIn, signOut, useSession } from 'next-auth/client';
import Cart from './Cart/Cart';
import Message from './Popover/Message';
import Notification from './Popover/Notification';
import PopLogin from './Popover/PopLogin';
import TopSearch from './Popover/TopSearch';
import Portal from './Portal';
import logo from '../assets/img/logo.png';

const Header = ({clicked}) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const quantity = state.carts.reduce((acc, item) => acc + item.quantity, 0);
    const cartOpen = state.isOpen;
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('loggedIn')));
    const [inputValue, setInputValue] = useState(false);
    const [messageOpen, setMessageOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [popOpen, setOpen] = useState('');
    const [coords, setCoords] = useState(null);
    const inputRef = useRef();

    const [session, loading] = useSession();

    const topSearchHandler = (e) => {
        const rect  = e.target.getBoundingClientRect();
        setCoords(rect);
        setInputValue(true);
    };

    const popHandler = (msg) => {
        if(msg === 'message'){
            setLoginOpen(false);
            setMessageOpen(prev => !prev);
        }
        if(msg === 'login'){
            setMessageOpen(false);
            setLoginOpen(prev => !prev);
        }
    };

    return(
        <header  className="w-full z-10 bg-white">
            <div className="container mx-auto py-3 px-2 flex flex-row justify-between items-center relative" >
                <div className="logo">
                    <button onClick={clicked} className="menu-icon md:hidden mr-6 text-xl focus:outline-none">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                    </button>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="h-full pl-5 md:mx-5 md:px-5 flex-1 flex items-center">
                    <div className="w-full bg-pri border-2 border-pri rounded flex relative">
                        <input onBlur={() => setInputValue(false)} onKeyPress={topSearchHandler} ref={inputRef} type="text" placeholder="Search for..." className="p-2 w-full focus:outline-none focus:bg-gray-50"/>
                        {
                            inputValue && <Portal selector="#modal"><TopSearch coords={coords} /></Portal>
                        }
                        <div className="flex justify-center items-center px-6">
                            <svg className="text-2xl text-sec"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="w-3/12 h-full hidden md:flex justify-between items-center icons">
                    <div className="p-2 relative rounded-full bg-pri bg-opacity-20 border border-pri-dark border-opacity-40 cursor-pointer text-pri">
                        {
                            cartOpen &&
                            <Portal selector="#modal">
                                <div className="w-full min-h-screen z-40 fixed top-0 right-0 bg-gray-800 bg-opacity-70">
                                    <Cart clicked={cartOpenHandler} cartOpen={cartOpen} />
                                </div>
                            </Portal>
                        }
                        <span className="w-5 h-5 bg-gradient-to-r p-1 from-sec to-sec text-pri-dark absolute -top-3 text-xs rounded-full flex justify-center items-center  right-0">{quantity}</span>
                        <svg onClick={() => dispatch(cartOpenHandler())} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    </div>
                    <div  className="p-2 rounded-full bg-gray-50 border border-gray-100 cursor-pointer">
                        <Message open={messageOpen} />
                        <svg onClick={() => popHandler('message')}  stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <div className="p-2 rounded-full bg-gray-50 border border-gray-100 cursor-pointer ">
                        <Notification />
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    </div>
                    <div className="p-2 rounded-full bg-gray-50 border border-gray-100 cursor-pointer">
                        {
                            user ?
                                <img onClick={() => popHandler('login')} src='https://img.search.brave.com/NRuCf8ve6caCxKQVRrISAosKFJKFpDEU3-uHp5zFYTk/rs:fit:739:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/VDVVaXBxLWJiNmJm/MVZoWXRScU5nSGFF/dyZwaWQ9QXBp' className="w-4 h-4 rounded-full" alt="User"/>
                               :<svg onClick={() => popHandler('login')} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                
                        }
                        <PopLogin open={loginOpen} />
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;