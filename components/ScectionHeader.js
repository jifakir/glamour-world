


const SectionHeader = ({children, title}) => {

    return (
        <section className="container mx-auto">
            <header className="w-full flex flex-col md:flex-row justify-between items-center py-2">
                <h1 className="text-lg font-bold  text-gray-700">{title}</h1>
                <div className="flex justify-between">
                    <div className="w-full flex-1 bg-gradient-to-r from-gray-200 via-gray-400 to-black flex flex-row rounded-md border overflow-hidden border-gray-200 items-center">
                        <input type="text" className="py-1 w-full focus:outline-none px-2 h-full text-gray-700"/>
                        <figure className="px-2 md:px-8 text-white text-2xl block">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" _css2="
                            @media (max-width: ,768px,) {
                            ,
                                    font-size:20px;
                                ,
                            }
                            " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </figure>
                    </div>
                    <button className="px-3 py-2 text-sm focus:outline-none rounded-md text-white uppercase ml-1 md:ml-5 border border-gray-200 bg-red-700">
                        View All
                    </button>
                </div>
            </header>
            <div className="w-full pb-10 md:pb-0">
                <div>{children}</div>
            </div>
        </section>
    )
};


export default SectionHeader;