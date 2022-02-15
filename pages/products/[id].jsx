import Layout from '../../components/Layouts/Layout';
import { useRouter } from 'next/router';
import { shop } from '../../products';
import { useDispatch, useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';
import { addToCart } from '../../store/cartSlice';
import useSWR from 'swr';
import Spinner from '../../components/Spinner';
import ReactImageMagnify from 'react-image-magnify';


const SINGLE_PRODUCT = gql`
    query Product($id: ID!) {
        product(id: $id){
            id,
            title,
            imgUrl,
            sku,
            price,
            discount
        }
    }
`;


const ProductDetails = () => {
    // Redux Actios
    const dispatch = useDispatch();

    // Redux State
    const cart = useSelector(state => state.carts);

    // Accessing route query
    const router = useRouter();
    const {id} = router.query;
    const {data, loading, error } = useQuery(SINGLE_PRODUCT,{variables: {id}});

    // Checking is product on the cart or not

    console.log("Cart: ", cart);
    console.log("Product Id", id);

    const isProductOnCart = cart.findIndex(pd => pd.id === id);
    console.log("Is product exist: ", isProductOnCart);
    if(loading){
        return <Spinner />
    }
    if(error){
        return <div className="w-full h-full">{error.message}</div>
    }

    const { product } = data;

    return (
        <div className="container mx-auto px-2 my-4">
            <div className="shadow-lg rounded-lg">
                <div className="bg-white text-gray-700 lg:flex flex-row">
                    <div className="w-full image-wrapper p-4 lg:w-2/5">
                        {/* <img src={product.imgUrl} alt="Product"/> */}
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: product.title,
                                isFluidWidth: true,
                                src: product.imgUrl
                            },
                            largeImage: {
                                src: product.imgUrl,
                                width: 600,
                                height: 500
                            }
                        }} />
                    </div>
                    <div className="w-full p-4 description lg:w-2/5">
                        <div className="py-3 text-pri-dark font-bold text-lg">
                            <h1>{product.title}</h1>
                        </div>
                        <div className="mb-2">
                            <h4 className="text-gray-300 text-xs">SKU: {product.sku}</h4>
                            <div className="brand">
                                <span className="text-pri text-xs">BRAND:</span>
                                <p className="text-sm text-gray-400 cursor-pointer inline-block">Individual Collections  |  More Backpack from Individual Collections</p>
                            </div>
                        </div>
                        <div className="my-6">
                            <h2 className="flex items-start mb-0 font-bold leading-none text-gray-800">
                            ৳ {product.price}
                            </h2>
                            <span className="text-sm font-normal text-gray-500">
                            Starting price
                            </span>
                        </div>
                        {/* <div className="mt-6">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                                <div className="flex flex-col">
                                    <label className="text-sm font-semibold text-gray-700 whitespace-no-wrap">
                                        Quantity
                                    </label>
                                    <button className="flex items-center justify-between px-3 py-2 mt-1 text-base font-semibold text-gray-900 border rounded ">
                                        <span>Only 1</span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="ml-4 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div> */}
                        {
                            isProductOnCart < 0 ?
                            (
                            <div onClick={() => dispatch(addToCart(product))} className="mt-6 mb-2">
                                <button className="bg-pri text-white py-3 w-full text-sm font-medium flex items-center justify-center rounded overflow-hidden whitespace-no-wrap focus:outline-none focus:bg-opacity-80">
                                    <span className="mr-3">
                                        <svg width="22" height="19" viewBox="0 0 22 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.63 13.45H6.675l.7-1.427 11.644-.02a.814.814 0 00.802-.671l1.612-9.026a.814.814 0 00-.799-.958l-14.812-.05-.127-.595a.832.832 0 00-.811-.656H1.262a.827.827 0 000 1.655h2.95l.554 2.63 1.362 6.592-1.754 2.862a.82.82 0 00-.07.862c.14.28.424.455.738.455h1.472a2.407 2.407 0 001.922 3.85 2.407 2.407 0 001.922-3.85h3.776a2.407 2.407 0 001.922 3.85 2.407 2.407 0 001.921-3.85h2.656c.455 0 .827-.37.827-.827a.83.83 0 00-.83-.825zM6.166 2.93l13.495.044-1.322 7.402-10.6.019L6.165 2.93zm2.271 14.36a.742.742 0 01-.74-.74c0-.409.332-.741.74-.741a.742.742 0 01.524 1.264.74.74 0 01-.524.217zm7.62 0a.742.742 0 01-.741-.74c0-.409.333-.741.74-.741a.742.742 0 01.524 1.264.74.74 0 01-.523.217z" fill="currentColor"></path></svg>
                                    </span>
                                    Add the product to cart
                                </button>
                            </div>
                            ):
                            (
                            <div  className="mt-6 mb-2">
                                <button className="bg-pri bg-opacity-50 cursor-not-allowed text-white py-3 w-full text-sm font-medium flex items-center justify-center rounded overflow-hidden whitespace-no-wrap focus:outline-none">
                                    <span className="mr-3">
                                        <svg width="22" height="19" viewBox="0 0 22 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.63 13.45H6.675l.7-1.427 11.644-.02a.814.814 0 00.802-.671l1.612-9.026a.814.814 0 00-.799-.958l-14.812-.05-.127-.595a.832.832 0 00-.811-.656H1.262a.827.827 0 000 1.655h2.95l.554 2.63 1.362 6.592-1.754 2.862a.82.82 0 00-.07.862c.14.28.424.455.738.455h1.472a2.407 2.407 0 001.922 3.85 2.407 2.407 0 001.922-3.85h3.776a2.407 2.407 0 001.922 3.85 2.407 2.407 0 001.921-3.85h2.656c.455 0 .827-.37.827-.827a.83.83 0 00-.83-.825zM6.166 2.93l13.495.044-1.322 7.402-10.6.019L6.165 2.93zm2.271 14.36a.742.742 0 01-.74-.74c0-.409.332-.741.74-.741a.742.742 0 01.524 1.264.74.74 0 01-.524.217zm7.62 0a.742.742 0 01-.741-.74c0-.409.333-.741.74-.741a.742.742 0 01.524 1.264.74.74 0 01-.523.217z" fill="currentColor"></path></svg>
                                    </span>
                                    Product added in cart
                                </button>
                            </div>
                            )
                        }
                        <div className="mt-4">
                            <hr/>
                            <div className="py-4">
                                <p className="text-sm font-semibold text-gray-800">
                                    Have questions about this product (SKU:0x73c0f)
                                </p>
                                <h3 className="flex items-center mt-2 font-bold text-sec">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                                    09638111666
                                </h3>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/5 bg-pri text-white">
                        <div className="p-4">
                            <div className="mt-6 mb-4 border-b">
                                <h4 className="mb-4 text-white">
                                    Warranty
                                </h4>
                                <div className="flex items-center mb-2">
                                    <span className="mr-2 text-green-600">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span><span className="text-gray-700">
                                    100% Authentic
                                    </span>
                                </div>
                            </div>
                        <div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductDetails.getLayout = function getLayout(page){

    return (
      <Layout>
        {page}
      </Layout>
      )
  }

export default ProductDetails;

