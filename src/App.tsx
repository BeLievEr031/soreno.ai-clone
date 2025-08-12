import Feature from "./sections/Feature"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Partner from "./sections/Partner"

function App() {
  return (
    <div className="bg-[#f9f7f6]">
      <Navbar />
      <Hero />
      <Partner />
      <Feature />
    </div>
  )
}

export default App