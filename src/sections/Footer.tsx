import Container from "../components/Container";
import SocialIcon from "../components/SocialIcon";

export default function Footer() {
    return (
        <div className="px-4 md:px-16 rounded-2xl ">
            <Container className="bg-white rounded-4xl py-20 md:py-40 px-4 md:px-16 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                    <div className="flex gap-2 justify-between border-b border-primary pb-5">
                        <div className="flex gap-1 items-center">
                            <SocialIcon icon="linkedin" />
                            <span className="capitalize">linkedin</span>
                        </div>
                        <SocialIcon icon="arrow" />

                    </div>
                    <div className="flex gap-2 justify-between border-b border-primary pb-5">
                        <div className="flex gap-1 items-center">
                            <SocialIcon icon="instagram" />
                            <span className="capitalize">instagram</span>
                        </div>
                        <SocialIcon icon="arrow" />


                    </div>
                    <div className="flex gap-2 justify-between border-b border-primary pb-3">
                        <div className="flex gap-1 items-center">
                            <SocialIcon icon="discord" />
                            <span className="capitalize">discord</span>
                        </div>
                        <SocialIcon icon="arrow" />
                    </div>
                </div>

                <div className="w-full md:w-1/3 mx-auto my-10 flex justify-between md:justify-evenly text-secondary">
                    <p>Terms of Service
                    </p>
                    <p>
                        Privacy Policy
                    </p>
                </div>

                <p className="text-lg text-center text-primary/70">Trueplace Technologies Inc © 2025. Made in San Francisco</p>
            </Container>
        </div>
    )
}
