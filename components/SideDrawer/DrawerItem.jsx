



const DrawerItem = ({cat, sub_cat, icon}) => {

    return (
        <li className="relative group font-medium p-3 text-sm text-pri hover:text-sec flex items-center cursor-pointer hover:bg-gray-100">
            <span className="icon">
                {icon}
            </span>
            <span className="w-full pl-2">{cat}</span>
            <span className="transform  rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>
            </span>
            <div className="absolute hidden transition-all duration-500 ease-in-out z-10 group-hover:block bg-white shadow text-pri-dark left-full top-0">
                <ul className="w-[200px] block">
                    {
                        sub_cat && sub_cat.map((item, idx) => {
                            return <li className="py-3 pl-3 pr-10 hover:bg-gray-100 hover:text-sec">{item.name}</li>
                        })
                    }
                </ul>
            </div>
        </li>
    )
}

export default DrawerItem;