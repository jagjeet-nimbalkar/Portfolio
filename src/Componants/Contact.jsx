import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const [messageStatus, setMessageStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        const formElement = e.target;
        formElement.classList.add("was-validated");
        if (!formElement.checkValidity()) {
            return;
        }
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setMessageStatus("success");
            form.current.reset();
            formElement.classList.remove("was-validated");
            setTimeout(() => setMessageStatus(""), 3000);
        })
            .catch((err) => {
                setMessageStatus("error");
                console.error("FAILED...", err);
                setTimeout(() => setMessageStatus(""), 3000);
            });

    };

    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <img src="/contact.png" alt="contact" className="img-fluid contact-img" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="text-center mb-4">Contact Me</h2>
                        {messageStatus === "success" && (
                            <div className="alert alert-success">✅ Mail sent successfully!</div>
                        )}
                        {messageStatus === "error" && (
                            <div className="alert alert-danger">❌ Failed to send Mail.</div>
                        )}
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            id="contact"
                            className="needs-validation"
                            noValidate
                        >
                            <div className="contact-form">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                        name="from_name"
                                        style={{ height: "50px" }}
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please enter your name.</div>
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        name="from_email"
                                        style={{ height: "50px" }}
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please enter a valid email.</div>
                                </div>

                                <div className="mb-4">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows="5"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                    <div className="invalid-feedback">Please enter your message.</div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    style={{ height: "50px" }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr className="container" />
        </>
    );
};
