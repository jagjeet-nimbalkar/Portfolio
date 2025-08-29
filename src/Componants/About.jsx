import React from "react";

export default function About() {
    return (
        <>

            <section className="container my-5">
                <div className="row align-items-center">
                    <h2 className="mb-3 text-center ">About Me</h2>
                    <div className="col-md-8 col-sm-12">
                        <h2 className="mb-3">Jagjeet Nimbalkar</h2>
                        <p>
                            Hi, I’m <strong>Jagjeet Nimbalkar</strong>, a passionate <strong>MERN Stack Developer</strong>.
                            I’m currently pursuing my degree in <strong>Computer Science & Engineering</strong> at
                            <strong> Bhagwant Institute of Technology</strong>. I enjoy building scalable web applications
                            using JavaScript, React, Node.js, Express, and MongoDB, and I also have experience with Git,
                            Docker, and Bootstrap.
                        </p>

                    </div>

                    <div className="col-md-4 col-sm-12 text-center text-md-end mt-4 mt-md-0">
                        <a
                            href="/Resume.pdf"
                            download
                            className="btn btn-primary"
                            style={{ borderRadius: "8px", padding: "10px 25px" }}
                        >
                            📄 Download Resume
                        </a>
                    </div>
                </div>
            </section>
            <hr className="container" />
        </>
    );
}
