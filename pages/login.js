
import Link from 'next/link';
import { useForm } from 'react-hook-form';


const Login = () => {

    const { register, handleSubmit, watch, formState: { errors }} = useForm();

    return (
        <div className="mx-auto my-10 rounded-md bg-white shadow-lg" style={{maxWidth:'480px'}}>
            <form className="container p-8">
                <div className="w-full py-2">
                    <label htmlFor="phone-num" className="text-pri-dark text-sm pb-1">Phone Number</label>
                    <input {...register("email", {required: true, pattern: /^\S+@\S+$/i})}  type="text" className="w-full text-gray-500 text-sm px-3 py-1 mt-2 focus:outline-none rounded border border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.email && 'A valid email required.'}</p>
                </div>
                <div className="w-full pb-2">
                    <label htmlFor="password" className="text-pri-dark pb-1 text-sm">Password</label>
                    <input {...register("password", {required: true})} type="password" className="w-full text-gray-500 text-sm px-3 py-1 mt-2 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-sec text-sm p-1">{errors.password && 'Password required'}</p>
                </div>
                <div className="w-full py-2 text-center">
                    <button type="submit" className="w-full uppercase bg-pri focus:outline-none text-sec font-medium rounded text-sm p-2 text-center">
                        login
                    </button>
                </div>
                <div className="w-full">
                    <p className="text-center py-2">
                        Don't have an account? 
                        <Link href="/signup" >
                            <a className="text-sec"> Sign up</a>
                        </Link>
                    </p>
                </div>
                <div className="w-full text-center text-sm py-2 text-sec">
                    <Link href="/forgot-password" >Forgot Password</Link>
                </div>
            </form>
        </div>
    )
};


export default Login;