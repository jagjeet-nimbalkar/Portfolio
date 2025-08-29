import React from "react";

export default function ProjectCard({ title, description, technologies, image, link, link2 }) {
    return (
        <div className="card project-card shadow-sm mb-4 flex-shrink-0">
            {image && (
                <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                    style={{ height: "150px", objectFit: "contain" }}
                />
            )}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{ flexGrow: 1, overflow: "hidden" }}>
                    {description}
                </p>

                {technologies && (
                    <div className="mb-2 d-flex flex-wrap gap-1">
                        {technologies.map((tech, idx) => (
                            <span key={idx} className="badge bg-secondary">{tech}</span>
                        ))}
                    </div>
                )}

                <div className="mt-auto d-flex gap-2">
                    {link && <a href={link} className="btn btn-primary btn-sm flex-fill">GitHub</a>}
                    {link2 && <a href={link2} className="btn btn-secondary btn-sm flex-fill">Visit Site</a>}
                </div>
            </div>
        </div>
    );
}
