import me from "../assets/land.png";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    return (
        <>
            <div id="home"
                className="d-flex flex-column flex-md-row align-items-center justify-content-center px-3 px-md-5">
                <div className="text-center text-md-start mb-4 ms-lg-5">
                    <h3 className="display-5 fw-bold mb-3  text-nowrap">Jagjeet Nimbalkar</h3>
                    <p className="lead">
                        <Typewriter
                            words={[
                                "MERN Stack Developer 💻",
                                "Building modern and scalable web applications 🚀"
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </p>
                </div>

                <div className="flex-1 d-flex justify-content-md-end">
                    <img src={me} alt="Jagjeet" className="img-fluid land" />
                </div>
            </div>
            <hr className="container" />
        </>
    );
}
