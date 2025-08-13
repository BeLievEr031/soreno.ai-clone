import clsx from "clsx"
import type { ReactNode } from "react"

interface IProp {
    children: ReactNode
    className?: string
}

function Container({ className, children }: IProp) {
    return (
        <div className={clsx(className || "py-8 md:py-14 px-4 md:px-40")}>
            {children}
        </div>
    )
}

export default Container