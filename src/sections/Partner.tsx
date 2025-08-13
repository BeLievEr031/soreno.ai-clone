import MckinseyImg from "../assets/mckinsey.png"
import GoldmanImg from "../assets/goldman.png"
import BostonImg from "../assets/boston.png"
import BainImg from "../assets/bain.png"
import Container from "../components/Container"
function Partner() {
    return (
        <Container>
            <h1 className="md:text-center text-5xl md:text-4xl font-lustria font-semibold text-secondary">Our candidates place at top tier institutions</h1>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-10">
                <img src={MckinseyImg} alt="MckinseyImg" className="w-[75%] md:w-[225px] md:object-contain" />
                <img src={BostonImg} alt="BostonImg" className="w-[75%] md:w-[189px] object-contain" />
                <img src={GoldmanImg} alt="GoldmanImg" className="w-[30%] md:w-[100px] object-contain" />
                <img src={BainImg} alt="BainImg" className="w-[75%] md:w-[225px] object-contain" />
            </div>
        </Container>
    )
}

export default Partner