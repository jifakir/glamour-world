import { useDispatch } from 'react-redux';
import { removeFromCart, deleteFromCart, customQuantity, addToCart } from '../../store/cartSlice';


const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const {id, quantity} = item;
    return (
        <div className="w-full border-b border-gray-200 flex p-2">
            <div className="img-wrapper w-16 h-auto">
                <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/44a0b142d0b2-lw-01-01.png" alt="Product" className="w-full"/>
            </div>
            <div className="w-full ml-2 text-sm">
                <h2>Pack 30 Leather Long Wallet - Brown - (SB-21)</h2>
                <h3>&#2547; 10665 x 1</h3>
                <div className="btn-wrapper flex">
                    <button onClick={() => { quantity > 1 ? dispatch(removeFromCart(id)) : null}} className="p-1 focus:outline-none border hover:border-gray-800"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
                        <span className="px-2">{quantity}</span>
                    <button onClick={() => dispatch(addToCart(item))} className="p-1 focus:outline-none border hover:border-gray-800"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></button>
                 </div>
            </div>
            <button onClick={() => dispatch(deleteFromCart(id))} class="p-2 sm:p-4">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" class="p-1 rounded-full hover:bg-gray-300" size="25" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
        </div>
    )
};


export default CartItem;