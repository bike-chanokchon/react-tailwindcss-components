import { useState } from "react";
import { IoMdArrowDropright } from 'react-icons/io'

function AccordionItem({ title, desc }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-[10px] border-2 p-3 w-96 cursor-pointer">
            <div onClick={() => setOpen(!open)} className="border-b p-2 bg-gray-200 flex justify-between items-center transition hover:bg-gray-300">
                <h2>{ title }</h2>
                <IoMdArrowDropright size={25} className={`${open && 'rotate-90'} duration-300`}/>
            </div>
            <p className={`${open ? 'max-h-96' : 'max-h-0'} duration-300 overflow-hidden`}>{ desc }</p>
        </div>
    );
}
 
export default AccordionItem;