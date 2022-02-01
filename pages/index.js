import Product from '../components/Product';
import SectionHeader from '../components/ScectionHeader';
import Slider from '../components/Slider/Slider';
import Slider2 from '../components/Slider/Slider2';
import { gql, useQuery } from '@apollo/client';
import {shop} from '../products';
import Spinner from '../components/Spinner';

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
              ['Desktop', 'Laptop', 'Mens watch', 'Microwave Oven', 'Motorbike', 'Refrigerator', 'Smartphone', 'Smart Tv & Android Tv', 'Speaker', 'Split Ac'].map( (item, idx) => (
                <li key={idx}  className="p-3 text-sm text-gray-700 flex items-center cursor-pointer hover:bg-gray-100">
                  <span className="icon">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" clipRule="evenodd"></path><path fillRule="evenodd" d="M7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0zM7 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z" clipRule="evenodd"></path></svg>
                  </span>
                  <span className="w-full pl-2">{item}</span>
                  <span>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>
                  </span>
              </li>
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
            data.products.map((item, idx) => <Product key={idx} item={item} />)
          }
        </div>
      </SectionHeader>
    </div>
  )
};
