import { CircleCheck } from "lucide-react";
import Container from "../components/Container"

function Pricing() {
    const priceCardDetails = [
        "Unlimited mock interviews with AI",
        "Learn frameworks and fundamentals",
        "Over 2000+ practice questions",
        "Scoring + analysis on responses",
        "Ability to add your own questions",
        "Expert, real-time intelligent feedback"
    ];

    return (
        <Container>
            <div className="text-center font-lustria">
                <h1 className="text-5xl font-bold">Simple pricing</h1>
                <p className="mt-10 text-4xl text-secondary">Trial with 1 free full mock interview</p>
            </div>

            <div className="flex justify-center font-lustria gap-5" >
                <div className="py-10 px-8 w-fit border rounded-2xl border-[#e8d69b] shadow-price-card mt-15">
                    <p className="font-satoshi text-xl">12 Months of Access</p>
                    <div className="flex items-center gap-6 py-5">
                        <h1 className="text-5xl font-semibold">$349</h1>
                        <span className="bg-green-300 text-green-900 px-4 rounded-full text-sm py-1">save 80% off</span>
                    </div>

                    <div>
                        {
                            priceCardDetails.map(function (item) {
                                return <div className="flex gap-1.5 font-satoshi mt-2">
                                    <CircleCheck className="text-orange-300" size={20} />
                                    <span className="text-sm text-secondary/95">{item}</span>
                                </div>
                            })
                        }
                    </div>

                    <a href="#" className="bg-primary mt-10 text-white shadow-xl px-8 py-3 font-bold rounded-full font-lustria inline-block">
                        Try for free today!
                    </a>
                </div>

                <div className="py-10 px-8 w-fit rounded-2xl shadow-price-card mt-15">
                    <p className="font-satoshi text-xl">1 Months of Access</p>
                    <div className="flex items-center gap-6 py-5">
                        <h1 className="text-5xl font-semibold">$199</h1>
                    </div>

                    <div>
                        {
                            priceCardDetails.map(function (item) {
                                return <div className="flex gap-1.5 font-satoshi mt-2">
                                    <CircleCheck className="text-orange-300" size={20} />
                                    <span className="text-sm text-secondary/95">{item}</span>
                                </div>
                            })
                        }
                    </div>

                    <a href="#" className="bg-primary mt-10 text-white shadow-xl px-8 py-3 font-bold rounded-full font-lustria inline-block">
                        Try for free today!
                    </a>
                </div>

            </div>
            <p className="text-center font-satoshi text-xl text-secondary py-15">All plans come with a 3 day free trial!</p>
        </Container>
    )
}

export default Pricing