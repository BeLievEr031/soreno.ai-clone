import clsx from "clsx";
import { CircleCheck } from "lucide-react";

interface IProp {
    cardTitle: string;
    description: string;
    features: string[];
    img: string;
    className?: string;
}
function StickyCard({ cardTitle, description, features, img, className }: IProp) {
    return (
        <div className={clsx('h-[90vh] sticky top-30 rounded-4xl bg-white border shadow-md border-tertiary/20 grid grid-cols-2 py-14 px-18 gap-x-16', className)}>
            <div>
                <p className='text-4xl font-lustria text-primary w-2/3'>{cardTitle}</p>
                <p className='text-lg mt-7 text-secondary/80'>
                    {description}
                </p>
                <div className='pt-8 font-satoshi'>
                    {
                        features.map(function (item) {
                            return <div className='flex w-fit bg-[#c28951]/10 py-2 px-5 rounded-full items-center gap-1 text-lg mt-3'>
                                <CircleCheck size={20} className='text-orange-300' />
                                <span>{item}</span>
                            </div>
                        })
                    }
                </div>
            </div>
            <img src={img} alt={img} className='mt-10' />
        </div>
    )
}

export default StickyCard