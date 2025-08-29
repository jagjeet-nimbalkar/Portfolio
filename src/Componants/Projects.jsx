import ProjectCard from "./ProjectCard";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import project4Img from "../assets/project4.png";
export default function Projects() {
    const projects = [
        {
            title: "Roomzy Clone",
            description: "An Airbnb clone that allows users to browse, filter, and book rooms online. Features include responsive room listings, search functionality, and smooth booking experience for all users.",
            technologies: ["EJS", "Node.js", "Express", "MongoDB", "Bootstrap"],
            image: project1Img,
            link: "https://github.com/jagjeet-nimbalkar/roomzy",
            link2: "https://roomzy-evf9.onrender.com/listings",
        },
        {
            title: "ServePlus",
            description: "A donation management platform for donors and receivers. Users can register donations, track pending and completed donations, and manage their profiles securely authentication and with ease and clarity.",
            technologies: ["React", "Django", "Bootstrap", "REST API"],
            image: project2Img,
            link: "https://github.com/jagjeet-nimbalkar/serveplus",
        },
        {
            title: "Zerodha Clone",
            description: "A modern stock trading web application simulating the Zerodha dashboard. Users can view real-time stock charts, manage their portfolios, place orders, and monitor analytics seamlessly.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
            image: project3Img,
            link: "https://github.com/jagjeet-nimbalkar/Zerodha-Clone.git",
        },
        {
            title: "Weather Podcast Web App",
            description: "A web app providing weather forecasts with a podcast-style audio experience. Users can check daily and weekly forecasts, listen to audio updates, and explore interactive maps efficiently.",
            technologies: ["React", "Vite", "ESLint", "OpenWeatherMap API"],
            image: project4Img,
            link: "https://github.com/jagjeet-nimbalkar/jagjeet-nimbalkar-Weather-Prodcast-Web-App.git",
        }
    ];
    return (
        <>
            <section id="projects" className="container my-5">
                <h2 className="text-center mb-4">Projects</h2>
                <div className="d-flex gap-3 overflow-auto py-3 projects-scroll ">
                    {projects.map((proj, idx) => (
                        <ProjectCard
                            key={idx}
                            title={proj.title}
                            description={proj.description}
                            technologies={proj.technologies}
                            image={proj.image}
                            link={proj.link}
                            link2={proj.link2}
                        />
                    ))}
                </div>
            </section>
            <hr className="container" />
        </>
    );
}
