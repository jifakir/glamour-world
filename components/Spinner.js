



const Spinner = () => {

    
    return (
        <div class="w-full overflow-hidden opacity-75 flex flex-col items-center justify-center">
            <div class="loader ease-linear rounded-full border-4 border-t-4 border-red-200 h-12 w-12 mb-4"></div>
            <h2 class="text-center text-gray-800 text-xl font-semibold">Loading...</h2>
            <p class="w-1/3 text-center text-gray-800">This may take a few seconds, please don't close this page.</p>
        </div>
    )
};

export default Spinner;