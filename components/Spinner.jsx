import { ImSpinner9 } from 'react-icons/im';



const Spinner = () => {

    
    return (
        <div class="w-full h-80 overflow-hidden opacity-75 flex flex-col items-center justify-center">
            <div className="animate-spin text-5xl text-sec">
                <ImSpinner9 />
            </div>
            <h2 class="text-center text-pri text-xl font-semibold my-2">Loading...</h2>
            <p class="w-1/3 text-center text-pri">This may take a few seconds, please don't close this page.</p>
        </div>
    )
};

export default Spinner;