import Container from '../components/Container'
import StackCradImg1 from "../assets/stack-card1.png"
import StackCradImg2 from "../assets/stack-card2.png"
import StackCradImg3 from "../assets/stack-card3.png"
import StickyCard from '../components/StickyCard';
function Feature() {

    const stickyCardData = [
        {
            title: "AI-Powered Mock Interviews",
            description: "Our technology simulates realistic interview problems using advanced AI technology, providing users with a comprehensive and engaging practice experience.",
            img: StackCradImg1,
            features: [
                "Realtime interaction",
                "Realistic, back and forth conversation",
                "Personalized to your position"
            ],
            className: "top-30"
        },
        {
            title: "Personalized Feedback",
            description: "After each mock interview, Soreno analyzes the user's responses using comprehensive data from human resources hiring data.",
            img: StackCradImg2,
            features: [
                "Actionable feedback",
                "Identification of strengths",
                "Highlighting areas for improvements"
            ],
            className: "top-36"
        },
        {
            title: "Comprehensive Scoring",
            description: "Assessing a score out of 100, broken down into key categories like communication skills, critical thinking, ethical reasoning, and professionalism.",
            img: StackCradImg3,
            features: [
                "Scoring based on admissions committee criteria",
                "Criteria analysis for each assessment element",
                "Key observations including delivery"
            ],
            className: "top-28"
        },
    ]
    return (
        <Container>
            <div className='text-center font-lustria'>
                <h1 className='text-5xl'>Practice Technical + Behavioural Questions
                </h1>
                <p className='text-tertiary text-xl mt-5 font-satoshi w-[55%] mx-auto'>
                    Blending state-of-the-art AI along with deepest set of industry job interview data.
                </p>
            </div>

            <div className='mt-40 relative min-h-screen'>
                {
                    stickyCardData.map(function (item) {
                        return <StickyCard
                            cardTitle={item.title}
                            description={item.description}
                            img={item.img}
                            features={item.features}
                            className={item.className}
                        />
                    })
                }
            </div>

        </Container>
    )
}

export default Feature