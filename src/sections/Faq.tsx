import Container from '../components/Container'
import Question from '../components/Question'

function Faq() {
    const faqArr = [
        {
            ques: "Which positions are covered in Soreno's system?",
            ans: "Any position in finance or consulting such as investment banking, sales and trading, management consulting, asset management, fixed income, pension funds or hedge funds, private equity, strategy and operations, venture capital, accounting, corporate finance, M&A, quant finance, and other relevant high finance and strategy positions"
        },
        {
            ques: "Are the questions tailored to the company and positions for which I am interviewing?",
            ans: "Yes, absolutely. We enable you to select companies and positions for which you are practicing, and then our intelligent systems will provide you with personalized and hyper-focussed questions for that particular company and positions and its geographic region."
        },
        {
            ques: "How many times can I practice?",
            ans: "Unlimited practice with hyper personalized feedback each time with a video recording playback of your response, along with a transcription of the interview."
        },
        {
            ques: "What does Soreno help with?",
            ans: "Our intelligent systems help you with practicing the technical and behavioural elements of an interview through critiquing of the content and the verbal delivery of your interview responses. Soreno will enable you to improve technical knowledge as well the ability to articulate crafted responses."
        },
        {
            ques: "Does Soreno conduct technical interviews?",
            ans: "Yes, if the position you are applying for will include technical questions in the interview, then the database of questions for your company and position will include those type of questions"
        },
        {
            ques: "Which countries does Soreno cover?",
            ans: "Positions in North America, Europe, UAE, China, Singapore, Japan, and Hong Kong. We will be adding support for positions in other countries shortly."
        },
        {
            ques: "How does Soreno help with my tone and expression?",
            ans: "Our systems' processing of your responses enables us to provide feedback on tone, confidence, and expression to improve your entire delivery and articulation."
        },
        {
            ques: "How can I contact the Soreno team?",
            ans: "Email us anytime at hello@soreno.ai and connect with our operations team within 1 hour."
        },
    ]
    return (
        <div className='px-16 shadow-2xl'>
            <Container className='bg-white rounded-4xl py-20 px-20'>
                <h1 className='text-center font-lustria text-5xl'>Frequently Asked Questions</h1>
                <div className='pt-10'>
                    {faqArr.map(function (item) {
                        return <Question
                            question={item.ques}
                            ans={item.ans}
                        />
                    })}
                </div>
            </Container>
        </div>
    )
}

export default Faq