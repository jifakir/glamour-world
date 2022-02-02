import { useState } from "react";




const PopContainer = ({title, open, children}) => {

    return (
        <div className={`popover ${!open ? 'hidden' : null} w-full z-30 md:w-96 overflow-hidden bg-sec text-pri-dark rounded-2xl shadow-lg absolute top-full right-0`}>
            <div className="w-full bg-sec p-3">
                <h3 className="px-2 font-semibold">{title}</h3>
            </div>
            <div className="w-full bg-white">
                {children}
            </div>
        </div>
    )
};

export default PopContainer;