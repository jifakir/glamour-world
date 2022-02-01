import {useEffect, useState} from 'react';
import PopContainer from './Container';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { gql, useMutation, useQuery } from '@apollo/client';
import Spinner from '../Spinner';


const ADD_USER = gql`
    mutation Add_User($email: String!, $password: String!){
        login(email: $email, password: $password){
            id,
            name,
            email,
            token
        }
    }
`

const PopLogin = ({open}) => {

    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('loggedIn')));
    const [error, setError] = useState();
    const { register, handleSubmit, watch, formState: { errors }} = useForm();

    const signOut = () => {
        localStorage.removeItem('loggedIn');
        setUser(null);
    };

    const [login, {data, loading}] = useMutation(ADD_USER,{
        onError: (err) => setError(err)
    });

    console.log("Login Data", data);

    const submit = async (data) => {

            const { name, email, password } = data;
            const result = await login({ variables: {name, email, password} });
            console.log("Submit Result: ", result);
            if(result.data){
                localStorage.setItem("loggedIn",JSON.stringify({name, email, id: result.data.id, token: result.data.token}));
                setUser(JSON.parse(localStorage.getItem('loggedIn')));
            }
    };


    const loginForm = (
        <form onSubmit={handleSubmit(submit)} className="container p-8">
                
                {error && <p className="text-red-700 text-sm p-1">{error.message}</p>}
                <div className="w-full py-4">
                    <label className="text-gray-500 text-sm pb-1">Email</label>
                    <input {...register("email",{required: true, pattern: /^\S+@\S+$/i})}   type="text" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none rounded border border-gray-300"/>
                    <p className="text-red-700 text-sm p-1">{errors.email && 'Please type a valid email.'}</p>
                </div>
                <div className="w-full pb-5">
                    <label className="text-gray-500 pb-1 text-sm">Password</label>
                    <input {...register("password",{required: true})}  type="password" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-red-700 text-sm p-1">{errors.password && 'Type valid password'}</p>
                </div>
                <div className="w-full py-2 text-center">
                    <button type="submit" className="w-full uppercase bg-red-600 focus:outline-none text-white rounded text-sm p-2 text-center">
                        login
                    </button>
                </div>
                <div className="w-full">
                    <p className="text-center py-2">
                        Don't have an account?
                            <Link href="/signup">
                                <a className="text-red-500"> Sign up</a>
                            </Link>
                    </p>
                </div>
                <div className="w-full text-center py-2 text-red-500">
                    <Link href="/forgot-password" >Forgot Password</Link>
                </div>
            </form>
    );
    
    useEffect(() => {
        
    },[]);


    return (
        <PopContainer open={open} title={"Login"}>
            {
                user ? 
                <>
                    <div className="w-full min-h-full flex justify-center items-center">
                        <button onClick={() => signOut()} className="py-5 px-10 bg-red-500 my-10 focus:outline-none rounded-lg text-white">Sign Out</button>
                    </div>
                </>:
                loginForm
            }
        </PopContainer>
    )
};


export default PopLogin;