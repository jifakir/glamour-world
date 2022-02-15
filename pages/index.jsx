import Layout from '../components/Layouts/Layout';
import Product from '../components/Product';
import SectionHeader from '../components/ScectionHeader';
import Slider from '../components/Slider/Slider';
import Slider2 from '../components/Slider/Slider2';
import { gql, useQuery } from '@apollo/client';
import {shop} from '../products';
import Spinner from '../components/Spinner';
import DrawerItem from '../components/SideDrawer/DrawerItem';
import { CATEGORIES } from '../assets/data';

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
const userQuery = gql`
  query User {
    users{
      id,
      name,
      email
    }
  }
`;

export default function Home() {

  const {loading, error, data} = useQuery(productQuery);
  console.log("GraphQl Data: ", data);

  if(loading){
    return <Spinner />
  }
  if(error){
    return <div className="">Error happened...</div>
  }
  return (
    <div className='w-full container px-2 mx-auto'>
      <div className="w-full flex">
        <div className="w-1/5 shadow bg-white hidden lg:block">
          <ul>
            {
              CATEGORIES.map( (item, idx) => (
                <DrawerItem key={idx} {...item} />
              ))
            }
          </ul>
        </div>
        <div className="w-full lg:w-4/5 p-3">
          <Slider />
          <div className="w-full hidden lg:block">
            <Slider2 />
          </div>
        </div>
      </div>
      <SectionHeader title="All Products">
        <div className="w-full grid grid-cols-2 py-5 pb-10 md:pb-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {
            data.products.map((product, idx) => <Product key={idx} {...product} />)
          }
        </div>
      </SectionHeader>
    </div>
  )
}

Home.getLayout = function getLayout(page){

  return (
    <Layout>
      {page}
    </Layout>
    )
}
