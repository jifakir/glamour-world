import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';


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
                {error && <p className="text-red-700 text-sm p-1">{error.message}</p>}
                <div className="w-full py-4">
                        <label className="text-gray-500 text-sm pb-1">Name</label>
                        <input {...register("name",{required: true})}   type="text" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none rounded border border-gray-300"/>
                        <p className="text-red-700 text-sm p-1">{errors.name ? 'Name is required': ''}</p>
                </div>
                <div className="w-full pb-5">
                    <label className="text-gray-500 text-sm pb-1">Email</label>
                    <input {...register("email",{required: true, pattern: /^\S+@\S+$/i })}   type="email" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none rounded border border-gray-300"/>
                    <p className="text-red-700 text-sm p-1">{errors.email ? 'Please input a valid email': ''}</p>
                </div>
                <div className="w-full pb-5">
                    <label className="text-gray-500 pb-1 text-sm">Password</label>
                    <input {...register("password",{required: true, minLength: 6, maxLength: 20})}  type="password" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-red-700 text-sm p-1">{errors.password ? 'Min 6 char and max 20 char': ''}</p>
                </div>
                <div className="w-full pb-5">
                    <label className="text-gray-500 pb-1 text-sm">Password</label>
                    <input {...register("cnfmpwd",{required: true})}  type="password" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-red-700 text-sm p-1">{(watch('cnfmpw') && watch('cnfmpwd') !== watch('password')) ? 'Password does not match' : ''}</p>
                </div>
                <div className="w-full py-2 text-center">
                    <button type="submit" className="w-full uppercase bg-red-600 focus:outline-none text-white rounded text-sm p-2 text-center">
                        sign up
                    </button>
                </div>
                <div className="w-full">
                    <p className="text-center py-2">
                        Do you have an account?
                            <a onClick={() => setTab('login')} className="text-red-500"> Login</a>
                    </p>
                </div>
            </form>
        </div>
    )
};


export default Signup;