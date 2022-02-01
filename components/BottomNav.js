import { useDispatch, useSelector } from 'react-redux';
import Notification from './Popover/Notification';
import { cartOpenHandler } from '../store/cartSlice';


const BottomNav = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.carts);
    const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="w-full md:hidden">
            <div className="w-full text-sm shadow rounded-t-lg  fixed bottom-0 bg-white py-3 px-5 text-gray-700 flex justify-between items-center icons">
                <div onClick={() => dispatch(cartOpenHandler())} className="p-2 flex flex-col items-center cursor-pointer ">
                    <div className="bg-gray-50 rounded-full p-2 border border-gray-100 relative">
                        <span className="w-5 h-5 bg-gradient-to-r p-1 from-red-500 to-red-900 text-white absolute -top-3 text-xs rounded-full flex justify-center items-center  right-0">{quantity}</span>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    </div>
                    <h4>Cart</h4>
                </div>
                <div className="p-2  flex flex-col items-center cursor-pointer">
                    <div className="bg-gray-50 rounded-full p-2 border border-gray-100">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <h4>Message</h4>
                </div>
                <div className="logo-wrapper overflow-hidden w-10 h-10 rounded-full">
                    <img src="https://evaly.com.bd/static/images/icon_b&w.svg" alt="Evaly Logo"/>
                </div>
                <div className="p-2 flex flex-col items-center cursor-pointer ">
                    <Notification />
                    <div className="bg-gray-50 rounded-full p-2 border border-gray-100">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    </div>
                    <h4>Notifications</h4>
                </div>
                
                <div className="p-2 flex flex-col items-center cursor-pointer">
                    <div className="bg-gray-50 rounded-full p-2 border border-gray-100">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <h4>Account</h4>
                </div>
            </div>
        </div>
    )
};


export default BottomNav;