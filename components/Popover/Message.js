import { useSession, signIn } from "next-auth/client";
import { useState } from "react";
import PopContainer from "./Container";



const Message = ({open}) => {

    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('loggedIn')));
    const [session, loading] = useSession();
    
    return (
        <PopContainer title="Message" open={open}>
            <div className="w-full flex justify-evenly border-b py-3 border-gray-200">
                <h2 className="text-gray-500"><span className="border-b-2 text-red-500 border-red-500 pb capitalize">Chat</span></h2>
                <h2 className="text-gray-500"><span className="hover:border-b-2 hover:text-red-500 border-red-500 pb capitalize">Invitations</span></h2>
            </div>
            <div className="w-full text-center">
                {
                    user ?
                    <p className="w-full py-5">You are logged in but the feature doesn't available yet.</p>:
                    <p className="container mx-auto py-5">You are not logged in.<button onClick={() => signIn('google')} className="w-full uppercase bg-red-600 focus:outline-none text-white rounded text-sm p-2 text-center">
                    Login
                    </button></p>
                }
            </div>
        </PopContainer>
    )
};


export default Message;