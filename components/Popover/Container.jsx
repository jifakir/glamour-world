import { useState } from "react";




const PopContainer = ({title, open, children}) => {

    return (
        <div className={`popover ${!open ? 'hidden' : null} w-full z-30 md:w-96 overflow-hidden text-white rounded-lg shadow-lg absolute top-3/4 right-0`}>
            <div className="w-full bg-pri p-3">
                <h3 className="px-2 font-medium">{title}</h3>
            </div>
            <div className="w-full bg-white">
                {children}
            </div>
        </div>
    )
};

export default PopContainer;