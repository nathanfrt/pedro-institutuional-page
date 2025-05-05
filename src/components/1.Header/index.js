import React, { useState } from "react";
import styles from "./Header.css";
import logo from "../../Images/logo preto.png";
import calender from "../../Images/calendar.png";
import perfil from "../../Images/doutor.jpg";
import useAnimateOnVisible from "../useAnimateOnVisible";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    useAnimateOnVisible();

    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { label: "Saúde Mental", href: "#saude-mental" },
        { label: "Sobre mim", href: "#sobre-mim" },
        { label: "Consultório", href: "#consultorio" },
        { label: "Telemedicina", href: "#telemedicina" },
        { label: "Contato", href: "#contato" }
    ];

    return (
        <div className="container headerc">
            <header className="d-flex align-items-center header">
                <img src={logo} alt="Logo Dr. Pedro Siqueira" className="logo" />

                <div
                    className={`hamburger d-md-none ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`nav nav-links ${menuOpen ? "open" : ""}`}>
                    {navItems.map(({ label, href }, index) => (
                        <a key={index} href={href}>{label}</a>
                    ))}
                </nav>
            </header>

            <main className="row align-items-center g-4 main">
                <section className="col-lg-6 col-md-12 menuTitle animate-on-visible">
                    <span className="fw-bold text-dark">Dr. Pedro Siqueira</span><br />
                    <span className="text-muted mb-2">Médico | Saúde Mental | CRM 97044</span><br /><br /><br />
                    <p>
                        Sou médico formado pela <strong>Universidade Federal do Rio de Janeiro (UFRJ)</strong> com <strong>Honraria Acadêmica Cum Laude</strong> e faço parte da equipe médica de residência de psiquiatria do <strong>Hospital da Polícia Militar de Minas Gerais (HPM-MG)</strong>.
                    </p><br /><br />
                    <button className="btn buttonp">
                        <a href="https://wa.me/5531995054490?text=Ol%C3%A1,%20Dr.%20Pedro!%20%F0%9F%A7%A0%F0%9F%98%8A%0A%0AEncontrei%20o%20seu%20site%20e%20me%20interessei%20pela%20consulta.%20Gostaria%20de%20saber%20como%20funciona%20o%20atendimento%20e%20quais%20s%C3%A3o%20as%20op%C3%A7%C3%B5es%20dispon%C3%ADveis.%0AObrigado(a)!">
                            <img src={calender} alt="Ícone calendário" className="calender-img" />
                            Agende sua consulta
                        </a>
                    </button>
                </section>

                <div className="col-lg-6 col-md-12 text-center">
                    <img src={perfil} alt="Dr. Pedro Siqueira" className="profile-img animate-on-visible" />
                </div>
            </main>
        </div>
    );
}

export default Header;
