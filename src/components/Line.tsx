import clsx from "clsx";

interface IProp {
    className: string;
}

function Line({ className }: IProp) {
    return (
        <div className={clsx("w-full bg-gradient-to-r from-white via-tertiary to-white", className)}>
        </div>
    )
}

export default Line