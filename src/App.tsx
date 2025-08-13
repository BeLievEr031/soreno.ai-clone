import Feature from "./sections/Feature"
import Hero from "./sections/Hero"
import HowItWork from "./sections/HowItWork"
import Navbar from "./sections/Navbar"
import Partner from "./sections/Partner"
import Pricing from "./sections/Pricing"

function App() {
  return (
    <div className="bg-[#f9f7f6]">
      <Navbar />
      <Hero />
      <Partner />
      <Feature />
      <Pricing />
      <HowItWork />

      <div className="h-screen bg-sky-500">

      </div>
    </div>
  )
}

export default App