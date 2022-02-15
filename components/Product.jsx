import { useRouter } from 'next/router';
import Image from 'next/image';


const Product = ({id, title, imgUrl, price, discount}) => {

    const location = useRouter();

    return (
        <div onClick={() => location.push(`/products/${id}`)} className="group w-full rounded-md bg-white cursor-pointer shadow-md">
            <div className="p-4">
                <div className="w-full overflow-hidden">
                    <img
                    className="w-full z-0 h-full transition-transform duration-500 transform group-hover:scale-110" 
                    src={imgUrl}
                    alt="Product Snapshot" 
                    />
                </div>
                <div className="description space-y-2 w-full">
                    <p className="title text-pri-dark text-xs md:text-base">
                        {title}
                    </p>
                    <div className="w-full flex justify-between">
                        <h3 className="price line-through text-sec opacity-50 text-sm md:text-base">&#2547; {price}</h3>
                        <h3 className="discounted-price text-pri-dark text-sm md:text-base font-semibold">&#2547; {Math.round(price - price * (discount / 100))}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Product;