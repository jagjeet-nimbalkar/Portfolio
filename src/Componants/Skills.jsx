import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGithub, FaDocker, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap } from "react-icons/si"; export default function Skills() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Express", icon: <SiExpress color="#000000" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "GitHub", icon: <FaGithub color="#19191aff" /> },
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
    ];

    return (
        <>
            <section id="skills" className="skills-section py-5 ">
                <h2 className="text-center mb-5">Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, idx) => {
                        const rotation = Math.random() * 20 - 10; // random rotate -10 to 10 deg
                        return (
                            <div
                                key={idx}
                                className="skill-card"
                                style={{ transform: `rotate(${rotation}deg)` }}
                            >
                                <div className="skill-icon">{skill.icon}</div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </section>
            <hr className="container" />
        </>
    );
}
