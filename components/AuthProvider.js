import { Provider } from 'next-auth/client';



const AuthProvider = ({children, session}) => {

    return (
        <Provider session={session} >
            {children}
        </Provider>
    )

};


export default AuthProvider;