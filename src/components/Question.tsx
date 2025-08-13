import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface IProp {
    question: string;
    ans: string;
}

function Question({ question, ans }: IProp) {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full md:px-28 cursor-pointer font-satoshi mt-5 md:mt-10" onClick={() => setOpen(!open)} >
            <div className="grid grid-cols-[5fr_1fr] md:flex md:justify-between w-full">
                <p>{question}</p>
                <ChevronDown />
            </div>
            {open && <p className="mt-5 text-lg text-secondary">
                {ans}
            </p>}
        </div>
    )
}

export default Question