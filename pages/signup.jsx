import Layout from '../components/Layouts/Layout';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';


const ADD_USER = gql`
    mutation Add_User($name: String!, $email: String!, $password: String!){
        addUser(name: $name, email: $email, password: $password){
            id,
            name,
            email
        }
    }
`


const Signup = () => {

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    const router = useRouter();

    const [addUser, {data, loading}] = useMutation(ADD_USER, {
        onError: (err) => setError(err),
        onCompleted: (succ) => setSuccess(succ)
    });

    const submit = async (data) => {

        const { name, email, password } = data;
        console.log("Submitted data", data);
        const submitted = await addUser({ variables: {name, email, password} });

    };

    if(success){
        router.push("/login");
    }

    return (
        <div className="mx-auto my-10 rounded-md bg-white" style={{maxWidth:'480px'}}>
            <form onSubmit={handleSubmit(submit)} className="container p-8 shadow-lg">
                {error && <p className="text-sec text-sm p-1">{error.message}</p>}
                <div className="w-full py-2">
                        <label className="text-pri-dark text-sm pb-5">Name</label>
                        <input {...register("name",{required: true})}   type="text" className="w-full text-pri-dark text-sm px-3 py-2 mt-2 focus:outline-none rounded border border-gray-300"/>
                        <p className="text-sec text-sm p-1">{errors.name ? 'Name is required': ''}</p>
                </div>
                <div className="w-full pb-2">
                    <label className="text-pri-dark text-sm">Email</label>
                    <input {...register("email",{required: true, pattern: /^\S+@\S+$/i })}   type="email" className="w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none rounded border border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.email ? 'Please input a valid email': ''}</p>
                </div>
                <div className="w-full pb-2">
                    <label className="text-pri-dark pb-1 text-sm">Password</label>
                    <input {...register("password",{required: true, minLength: 6, maxLength: 20})}  type="password" className="w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.password ? 'Min 6 char and max 20 char': ''}</p>
                </div>
                <div className="w-full pb-2">
                    <label className="text-pri-dark pb-1 text-sm">Password</label>
                    <input {...register("cnfmpwd",{required: true})}  type="password" className="w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-sec text-sm p-1">{(watch('cnfmpw') && watch('cnfmpwd') !== watch('password')) ? 'Password does not match' : ''}</p>
                </div>
                <div className="w-full py-5 text-center">
                    <button type="submit" className="w-full uppercase bg-pri hover:bg-pri-dark focus:outline-none text-sec rounded text-sm font-medium p-2 text-center">
                        sign up
                    </button>
                </div>
                <div className="w-full">
                    <p className="text-center py-2">
                        Do you have an account?
                            <Link href={'/login'}>
                                <a className="text-sec"> Login</a>
                            </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

Signup.getLayout = function getLayout(page){

    return (
      <Layout>
        {page}
      </Layout>
      )
  }


export default Signup;