
import Link from 'next/link';


const Login = () => {

    return (
        <div className="mx-auto my-10 rounded-md bg-white" style={{maxWidth:'480px'}}>
            <form className="container p-8">
                <div className="w-full py-4">
                    <label htmlFor="phone-num" className="text-gray-500 text-sm pb-1">Phone Number</label>
                    <input name="phone-num"  type="text" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none rounded border border-gray-300"/>
                    <p className="text-red-700 text-sm p-1">Phone nubmer should be 11 digit number</p>
                </div>
                <div className="w-full pb-5">
                    <label htmlFor="password" className="text-gray-500 pb-1 text-sm">Password</label>
                    <input name="password" type="password" className="w-full text-gray-500 text-sm px-3 py-1 focus:outline-none border rounded border-gray-300"/>
                    <p className="text-red-700 text-sm p-1">Password missing</p>
                </div>
                <div className="w-full py-2 text-center">
                    <button type="submit" className="w-full uppercase bg-red-600 focus:outline-none text-white rounded text-sm p-2 text-center">
                        login
                    </button>
                </div>
                <div className="w-full">
                    <p className="text-center py-2">
                        Don't have an account? 
                        <Link href="/signup" >
                            <a className="text-red-500"> Sign up</a>
                        </Link>
                    </p>
                </div>
                <div className="w-full text-center py-2 text-red-500">
                    <Link href="/forgot-password" >Forgot Password</Link>
                </div>
            </form>
        </div>
    )
};


export default Login;