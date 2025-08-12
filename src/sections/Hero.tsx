import Container from "../components/Container"
import HeroImg from "../assets/hero.png"
import Line from "../components/Line"
import YCombinatorImg from "../assets/ycombinator.png"
import { CircleCheck } from "lucide-react";

const features = [
    "Learn frameworks, structuring, and analysis techniques",
    "500+ questions and case books from the industry",
    "Talk to Soreno's AI—just like you would with a real interviewer",
    "Feedback on technical responses as well as tone and confidence",
    "AI teaches you how to get the answers right​"
];


function Hero() {
    return (
        <Container>

            <div className="grid grid-cols-2 gap-x-40 items-center">
                <div>
                    <span className="border border-primary px-4 py-2 rounded-full font-satoshi">
                        Join 4200+ other interviewees this cycle
                    </span>
                    <h1 className="mt-7 text-4xl font-lustria">
                        Master Consulting Case Fundamentals with AI
                    </h1>

                    <a href="#" className="bg-secondary text-white shadow-xl px-8 py-3 font-bold rounded-full mt-5 font-lustria inline-block">
                        Try for free today!
                    </a>

                    <Line className="h-[0.5px] mt-8" />


                    <div className="font-satoshi pt-5 text-secondary text-lg font-[400]">
                        <p>Practice real cases with the most advanced AI for consulting. Learn the technical questions and behavioural questions to ensure help you develop your entire skillset</p>
                        <p className="pt-5">Our AI takes you through progressive skill-building: mastering case frameworks, then applying them across industries, and preparing you for interview conditions</p>
                    </div>

                    <Line className="h-px mt-10" />

                    <div className="pt-5">
                        {
                            features.map((item, idx) => {
                                return <div className="flex items-center gap-1 mt-2 font-satoshi text-[15px] text-tertiary">
                                    <CircleCheck size={20} className="overflow-hidden text-orange-300" />
                                    <span>{item}</span>
                                </div>
                            })
                        }
                    </div>

                    <img src={YCombinatorImg} alt="y-combinator.png" className="rounded-md shadow-sm w-[237px] mt-5" />
                </div>

                <div className="">
                    <img src={HeroImg} alt="hero-image.png" className="shadow-hero-img rounded-xl w-[527px]" />
                </div>
            </div>
        </Container>
    )
}

export default Hero