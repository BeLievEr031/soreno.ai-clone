import MckinseyImg from "../assets/mckinsey.png"
import GoldmanImg from "../assets/goldman.png"
import BostonImg from "../assets/boston.png"
import BainImg from "../assets/bain.png"
import Container from "../components/Container"
function Partner() {
    return (
        <Container>
            <h1 className="text-center text-4xl font-lustria font-semibold text-secondary">Our candidates place at top tier institutions</h1>
            <div className="flex justify-between items-center pt-8">
                <img src={MckinseyImg} alt="MckinseyImg" className="w-[225px] object-contain" />
                <img src={BostonImg} alt="BostonImg" className="w-[189px] object-contain" />
                <img src={GoldmanImg} alt="GoldmanImg" className="w-[100px] object-contain" />
                <img src={BainImg} alt="BainImg" className="w-[225px] object-contain" />
            </div>
        </Container>
    )
}

export default Partner