import Product from "../../components/Product";
import SectionHeader from "../../components/ScectionHeader";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Products = () => {

    const {data, error} = useSWR(`/api/products`, fetcher);
    console.log(data);
    if(!data){
        return <div className="w-full h-full bg-red-300">The products is loading...</div>
    }
    if(error){
        return <div className="w-full h-full">An error occured {error.message}</div>
    }


    return (
        <div className="w-full">
            <SectionHeader title="Beauty & Cosmatics">
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-5">
                {
                    data.map((product, idx) => <Product key={idx} item={product} />)
                }
                </div>
            </SectionHeader>
        </div>
    )
};

export default Products;