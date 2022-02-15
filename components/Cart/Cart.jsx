import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { cartOpenHandler } from '../../store/cartSlice';
import CartItem from "./CartItem";



const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.carts);
    const cartOpen = useSelector(state => state.isOpen);
    const subTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subTotal + 50;


    const router = useRouter();

    const checkoutHandler = () => {
        router.push('/checkout');
    };


    return (
        <div className={`w-full md:w-2/6 min-h-screen flex flex-col justify-between absolute bg-white top-0 right-0 rounded-l-md overflow-hidden shadow transition-all duration-500 ease-in-out transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="header w-full flex justify-between px-3 py-2 bg-pri text-white text-sm font-medium">
                <div onClick={() => dispatch(cartOpenHandler())} className="cursor-pointer hover:text-red-600">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="25" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </div>
                <h2>My Cart</h2>
            </div>
            <div className="products-wrapper flex-1 w-full">
                {
                    cart.map((item, idx) => <CartItem key={idx} item={item} />)
                }
            </div>
            <div className="cart-footer p-4">
                <div className="py-2 w-full flex justify-between text-sm font-medium text-pri-dark">
                    <h2>Subtotal</h2>
                    <h2 className='font-semibold'>&#2547; {subTotal}</h2>
                
                </div>
                <div className="py-2 w-full flex justify-between text-sm font-medium text-pri-dark">
                    <h2>Total</h2>
                    <h2 className='font-bold'>&#2547; {total} </h2>
                </div>
                <button className="checkout focus:outline-none text-white font-medium py-3 text-sm my-2 rounded-md w-full bg-pri bg-opacity-90 hover:bg-opacity-95">
                    <h3 onClick={() => checkoutHandler()} className="go-checkout flex justify-center items-center">
                        Proceed to checkout 
                        <span className='text-lg px-2'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" class="mx-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                        </span>
                    </h3>
                </button>
            </div>
        </div>
    )
};


export default Cart;