import Layout from '../../components/Layouts/Layout';
import Product from "../../components/Product";
import SectionHeader from "../../components/ScectionHeader";
import { gql, useQuery } from '@apollo/client';
import Spinner from '../../components/Spinner';

const productQuery = gql`
  query Product{
    products{
      id,
      title,
      imgUrl,
      price,
      discount
    }
  }
`;

const Products = () => {

    const {data, loading, error } = useQuery(productQuery);

    if(loading){
        return <Spinner />
    }
    return (
        <div className="w-full">
            <SectionHeader title="Beauty & Cosmatics">
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-5">
                {
                    data.products.map((product, idx) => <Product key={idx} {...product} />)
                }
                </div>
            </SectionHeader>
        </div>
    )
}

Products.getLayout = function getLayout(page){

  return (
    <Layout>
      {page}
    </Layout>
    )
}

export default Products;