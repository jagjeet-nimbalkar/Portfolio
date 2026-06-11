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
              Hi, I'm <strong>Jagjeet Nimbalkar</strong>, a passionate{" "}
              <strong>Java Full Stack Developer</strong>
              and final-year <strong>
                Computer Science &amp; Engineering
              </strong>{" "}
              student at
              <strong>Bhagwant Institute of Technology, Barshi</strong>. I have
              a strong foundation in ,{" "}
              <strong>Core Java, Advanced Java</strong> (JDBC, Servlet, JSP),{" "}
              <strong>Hibernate, Spring Boot, REST API, SQL/MySQL, Git</strong>,
              and <strong>GitHub</strong>, gained through dedicated coursework
              and hands-on training. I am actively building projects to apply my
              knowledge and grow as a developer, eager to contribute to
              real-world applications and continue learning in a professional
              environment.
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
