import Container from "../components/Container";
import Step1Img from "../assets/step1.png";
import Step2Img from "../assets/step2.png";
import Step3Img from "../assets/step3.png";
import Step4Img from "../assets/step4.png";
import { Code, Pencil, Search, SendHorizontal } from "lucide-react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

function HowItWork() {
    const howItWorkArr = [
        {
            buttonText: "Discover",
            description:
                "Complete your profile to personalize your preparation experience for your jobs.",
            icon: Search,
        },
        {
            buttonText: "Practice",
            description:
                "Engage in AI-powered mock interviews that simulate highly realistic interviews in realtime.",
            icon: Pencil,
        },
        {
            buttonText: "Review",
            description:
                "Access detailed feedback, analysis on assessment criteria, and review video transcripts",
            icon: Code,
        },
        {
            buttonText: "Improve",
            description:
                "Track the progress of your scores and improve your interview performance.",
            icon: SendHorizontal,
        },
    ];

    const images = [Step1Img, Step2Img, Step3Img, Step4Img];
    const [currentImage, setCurrentImage] = useState(images[0]);

    const refs = howItWorkArr.map(() => useRef(null));
    const inViews = refs.map((ref) => useInView(ref, { amount: 0.2 }));

    useEffect(() => {
        inViews.forEach((isVisible, idx) => {
            if (isVisible) {
                setCurrentImage(images[idx]);
            }
        });
    }, [inViews]);

    return (
        <div className="px-16">
            <Container className="bg-[#F7F3ED] rounded-2xl py-15">
                <h1 className="text-center text-6xl font-lustria">How Soreno Works</h1>
                <p className="text-center w-1/2 mx-auto mt-5 font-satoshi text-lg text-secondary">
                    An AI-powered interview preparation platform designed to help finance
                    and consulting applicants prepare for their job interviews
                </p>

                <div className="grid grid-cols-2 gap-20 relative min-h-screen">
                    {/* Left Side */}
                    <div className="pt-[55%] space-y-10 font-satoshi">
                        {howItWorkArr.map((item, idx) => (
                            <motion.div
                                ref={refs[idx]}
                                key={idx}
                                className={clsx(
                                    "px-30",
                                    idx !== howItWorkArr.length - 1 && "h-[90vh]",
                                    idx === howItWorkArr.length - 1 && "pb-20"
                                )}
                            >
                                <div className="flex items-center px-4 py-2 border border-primary/50 w-fit rounded-full gap-2">
                                    <item.icon size={20} className="text-orange-400" />
                                    <span className="text-lg text-secondary/90">
                                        {item.buttonText}
                                    </span>
                                </div>
                                <p className="text-3xl text-primary mt-8">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.img
                        key={currentImage}
                        src={currentImage}
                        alt="step"
                        className="w-[70%] sticky top-0 pt-36 rounded-xl object-contain"
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.7 }}
                    />
                </div>

                <div className="flex justify-center py-10">
                    <a href="#" className="bg-primary mt-10 text-white shadow-xl px-8 py-3 font-bold rounded-full font-lustria inline-block">
                        Try for free today!
                    </a>
                </div>
            </Container>
        </div>
    );
}

export default HowItWork;
