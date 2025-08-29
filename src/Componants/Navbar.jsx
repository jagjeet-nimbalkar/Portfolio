import { useState, useEffect } from "react";
import "../App.css"

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("bg-dark", "text-white");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("bg-dark", "text-white");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const menuItems = ["home", "skills", "projects", "certifications", "contact"];
    const linkClass = darkMode ? "nav-link text-white" : "nav-link text-dark";
    const menuBg = { backgroundColor: darkMode ? "#212529" : "#f8f9fa" };
    const navbarText = darkMode ? "text-white" : "text-dark";

    return (
        <nav className="navbar navbar-expand-md sticky-top shadow p-3" style={menuBg}>
            <div className="d-flex justify-content-between align-items-center w-100">
                <a className={`navbar-brand fw-bold  ${navbarText}`} href="#home">
                    Jagjeet's <span className="text-primary">Portfolio</span>
                </a>
                <div className="d-flex align-items-center navlinks">
                    <button
                        className={`navbar-toggler btn ms-2 d-md-none ${darkMode ? "bg-light btn-dark" : "btn-primary"}`}
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <button
                        className={`btn ms-2 d-md-none ${darkMode ? "btn-light" : "btn-primary"}`}
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? "🌙" : "☀️"}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="w-100 mt-2 p-3 rounded shadow d-md-none border:none" style={menuBg}>
                    <ul className="navbar-nav d-flex flex-column gap-2">
                        {menuItems.map((item) => (
                            <li key={item} className="nav-item">
                                <a className={linkClass} href={`#${item}`} onClick={() => setMenuOpen(false)}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="d-none d-md-flex align-items-center ms-auto gap-3">
                <ul className="navbar-nav d-flex flex-row gap-3">
                    {menuItems.map((item) => (
                        <li key={item} className="nav-item">
                            <a className={linkClass} href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                        </li>
                    ))}
                </ul>
                <button className={`btn ${darkMode ? "btn-light" : "btn-primary"}`} onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "🌙" : "☀️"}
                </button>
            </div>
        </nav>
    );
}
