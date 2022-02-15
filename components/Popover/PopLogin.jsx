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
        <form onSubmit={handleSubmit(submit)} className="container px-8 py-5">
                
                {error && <p className="text-sec text-sm p-1">{error.message}</p>}
                <div className="w-full pt-1 pb-2">
                    <label className="text-pri-dark text-sm pb-1">Email</label>
                    <input {...register("email",{required: true, pattern: /^\S+@\S+$/i})}   type="text" className="w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none rounded border border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.email && 'Please type a valid email.'}</p>
                </div>
                <div className="w-full pb-2">
                    <label className="text-pri text-sm pb-1">Password</label>
                    <input {...register("password",{required: true})}  type="password" className="w-full text-gray-500 text-sm px-3 py-2 mt-2 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.password && 'Type valid password'}</p>
                </div>
                <div className="w-full py-3 text-center">
                    <button type="submit" className="w-full uppercase bg-pri text-white focus:outline-none font-base rounded text-sm p-2 text-center">
                        login
                    </button>
                </div>
                <div className="w-full">
                    <p className="text-center text-sm text-pri pt-2 pb-1">
                        Don't you have an account?
                            <Link href="/signup">
                                <a className="text-sec text-xs"> Sign up</a>
                            </Link>
                    </p>
                </div>
                <div className="w-full text-center text-sec text-xs">
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
                        <button onClick={() => signOut()} className="py-5 px-10 bg-sec my-10 focus:outline-none rounded-lg text-white">Sign Out</button>
                    </div>
                </>:
                loginForm
            }
        </PopContainer>
    )
};


export default PopLogin;