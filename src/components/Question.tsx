import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface IProp {
    question: string;
    ans: string;
}

function Question({ question, ans }: IProp) {
    const [open, setOpen] = useState(false)
    return (
        <div className="px-28 cursor-pointer font-satoshi mt-10" onClick={() => setOpen(!open)} >
            <div className="flex justify-between">
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