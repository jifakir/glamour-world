import * as React from 'react';
import { useForm } from 'react-hook-form';
import AdminLayout from '../../components/Layouts/AdminLayout';
import { gql, useMutation, useQuery } from '@apollo/client';


// const ADD_USER = gql`
//     mutation Add_Product($category: String!, sub_category: String!, $title: String!, $description: String!, $price: Int!, $discount: Int, $sku: String!){
//         addUser(title: $title, category: $category, sub_category: $sub_category, ){
//             id,
//             name,
//             email
//         }
//     }
// `


const AddProduct = () => {


    // Destructure react-hook-form function
    const { register, handleSubmit, watch, formState: { errors }} = useForm();

    // Form Submit Handler
    const submit = async (data) => {

        const { name, email, password } = data;
        console.log("Submitted data", data);
        const submitted = await addUser({ variables: {name, email, password} });


    };

    return (
        <div className="w-full text-pri">
            <h1 className="w-full text-center font-semibold bg-gray-50 text-pri py-2">Add Product</h1>
            <form onSubmit={handleSubmit(submit)} className="w-full px-8">
                {/* {error && <p className="text-sec text-sm p-1">{error.message}</p>} */}
               
                <div className="w-full py-2">
                        <label className="text-pri-dark text-sm pb-5">Category</label>
                        <select {...register("category",{required: true})} className="w-full text-pri-dark text-sm px-3 py-2 mt-2 focus:outline-none rounded border border-gray-300">
                            <option value="">Select a Category</option>
                        </select>
                        <p className="text-sec text-sm p-1">{errors.category ? 'Category is required': ''}</p>
                </div>
                <div className="w-full py-2">
                        <label className="text-pri-dark text-sm pb-5">Sub Category</label>
                        <select {...register("sub_category",{required: true})} className="w-full text-pri-dark text-sm px-3 py-2 mt-2 focus:outline-none rounded border border-gray-300">
                            <option value="">Select a Sub Category</option>
                        </select>
                        <p className="text-sec text-sm p-1">{errors.sub_category ? 'Sub Category is required': ''}</p>
                </div>
                <div className="w-full py-2">
                        <label className="text-pri-dark text-sm pb-5">Product Name</label>
                        <input {...register("title",{required: true})}   type="text" className="w-full text-pri-dark text-sm px-3 py-2 mt-2 focus:outline-none rounded border border-gray-300"/>
                        <p className="text-sec text-sm p-1">{errors.title ? 'Name is required': ''}</p>
                </div>
                <div className="w-full pb-2">
                    <label className="text-pri-dark text-sm">Sku</label>
                    <input {...register("sku",{required: true})}   type="text" className="w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none rounded border border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.sku ? 'Sku is required': ''}</p>
                </div>
                <div className="w-full pb-2">
                    <label className="text-pri-dark pb-1 text-sm">Price</label>
                    <input {...register("price",{required: true})}  type="number" className="w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.price ? 'Price is required': ''}</p>
                </div>
                <div className="w-full pb-2">
                    <label className="text-pri-dark pb-1 text-sm">Discount</label>
                    <input {...register("discount",{required: true})}  type="number" className="w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.discount ? 'Password does not match' : ''}</p>
                </div>
                <div className="w-full pb-2">
                    <label className="text-pri-dark pb-1 text-sm">Image Url</label>
                    <input {...register("imgUrl",{required: true})}  type="url" className="w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.discount ? 'Password does not match' : ''}</p>
                </div>
                <div className="w-full pb-2">
                    <label className="text-pri-dark pb-1 text-sm">Discription</label>
                    <textarea name="" id="" cols="30" rows="10" className='w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none border rounded border-gray-300'></textarea>
                    <p className="text-sec text-sm p-1">{errors.discount ? 'Password does not match' : ''}</p>
                </div>
                <div className="w-full py-5 text-center">
                    <button type="submit" className="w-full uppercase bg-pri hover:bg-pri-dark focus:outline-none text-sec rounded text-sm font-medium p-3 text-center">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

AddProduct.getLayout = function getLayout(page){
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}

export default AddProduct;