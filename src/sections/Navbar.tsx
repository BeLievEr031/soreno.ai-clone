import LogoImg from "../assets/logo.png"
function Navbar() {
    return (
        <nav className="py-10 px-5 md:px-15 font-lustria flex justify-between items-center">
            <img src={LogoImg} alt="sorena.ai-logo" className="w-42 object-contain" />
            <div className="font-satoshi text-secondary flex gap-5 text-lg font-[600] hidden md:block">
                <a href="#" className="capitalize">how it works</a>
                <a href="#" className="capitalize">pricing</a>
                <a href="#" className="capitalize">resource</a>
            </div>

            <a href="#" className="hidden md:inline bg-primary text-white shadow-xl px-8 py-3 font-bold rounded-full">
                Try for free today!
            </a>
        </nav>
    )
}

export default Navbar