


const TopSearch = ({coords}) => {
    
    return (
        <div className="wrapper bg-white shadow-md rounded-md mt-5">
            <div className="w-full p-2">
                <div className="w-full flex justify-evenly border-b py-3 border-gray-200">
                    <h2 className="text-gray-500 cursor-pointer"><span className="border-b-2 text-pri border-sec pb capitalize">Products</span></h2>
                    <h2 className="text-gray-500 cursor-pointer"><span className="hover:border-b-2 text-pri hover:border-sec pb capitalize">Shops</span></h2>
                </div>
                <div className="w-full min-h-20 text-center">
                    <p className="py-5">No item matched your query</p>
                </div>
            </div>
            <style jsx>{`
                .wrapper {
                    position: fixed;
                    width: ${coords.width}px;
                    top: ${coords.y + coords.height}px;
                    left: ${coords.left}px;
                    z-index: 5000;
                }
            `}
            </style>
        </div>  
    )
};

export default TopSearch;