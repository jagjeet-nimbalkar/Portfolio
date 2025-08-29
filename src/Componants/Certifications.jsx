import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import certificate from "../assets/certificate.png";
import certificate2 from "../assets/certificate2.png"
import certificate3 from "../assets/certificate3.png"

export default function Certifications() {
    const [show, setShow] = useState(false);
    const [activeCert, setActiveCert] = useState(null);

    const certifications = [
        {
            title: "MERN Stack Development",
            issuer: "Apna College",
            date: "2025",
            image: certificate,
        },
        {
            title: "Gen AI Model",
            issuer: "NXT Wave",
            date: "2024",
            image: certificate2,
        },
        {
            title: "C & Data Structure",
            issuer: "Udemy",
            date: "2023",
            image: certificate3,
        }
    ];

    const handleShow = (cert) => {
        setActiveCert(cert);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setActiveCert(null);
    };

    return (
        <>
            <section id="certifications" className="container my-5">
                <h2 className="text-center mb-4">Certifications</h2>
                <div className="row justify-content-center">
                    {certifications.map((cert, idx) => (
                        <div key={idx} className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
                            <div className="card shadow-sm certification-card flex-fill">
                                <div className="card-body text-center d-flex flex-column">
                                    <h5 className="card-title">{cert.title}</h5>
                                    <p className="card-text">
                                        <strong>{cert.issuer}</strong> <br />
                                        <small>{cert.date}</small>
                                    </p>
                                    <button
                                        className="btn btn-primary mt-auto"
                                        onClick={() => handleShow(cert)}
                                    >
                                        View Certificate
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Modal show={show} onHide={handleClose} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{activeCert?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        {activeCert?.image ? (
                            <img
                                src={activeCert.image}
                                alt={activeCert.title}
                                className="img-fluid rounded"
                                style={{ maxHeight: "80vh" }}
                            />
                        ) : (
                            <p>No certificate available</p>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
            <hr className="container" />
        </>
    );
}
