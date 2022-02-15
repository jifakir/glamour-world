import PopContainer from "./Container";



const Notification = () => {

    return (
        <PopContainer title={"Notification"} >
            <div className="w-full flex justify-evenly text-center">
                <h2 className="text-gray-700 "><span className="text-center hover:border-b-2 hover:text-red-600 border-red-600">General</span></h2>
                <h2 className="text-gray-700 "><span className="text-center hover:border-b-2 hover:text-red-600 hover:border-red-600">Newsfeed</span></h2>
            </div>
            <div className="w-full">
                ...
            </div>
        </PopContainer>
    )
};

export default Notification;