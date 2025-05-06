import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../Images/logo preto.png";
import calender from "../../Images/calendar.png";
import perfil from "../../Images/psq.png";
import useAnimateOnVisible from "../useAnimateOnVisible";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    useAnimateOnVisible();

    const contactText = "Olá, Dr. Pedro!\n\nEncontrei seu site e me interessei pela consulta. Gostaria de saber como funciona o atendimento e quais são as opções disponíveis.\n\nObrigado(a)!";
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Saúde Mental", href: "#saude-mental" },
        { label: "Sobre mim", href: "#sobre-mim" },
        { label: "Consultório", href: "#consultorio" },
        { label: "Telemedicina", href: "#telemedicina" },
        { label: "Contato", href: "#contato" }
    ];

    return (
        <div className={`container ${styles.headerC}`} id="home">
            <header className={`d-flex align-items-center ${styles.header}`}>
                <div className={`col-xl-3 col-lg-2 col-md-12 ${styles.imgMobile}`}>
                    <img src={logo} alt="Logo Dr. Pedro Siqueira" className={styles.logo} />
                </div>

                <div className="col-xl-9 col-lg-10 col-md-12 ">
                    <div className="d-flex justify-content-end">
                        <div
                            className={`d-md-none  ${styles.hamburger} ${menuOpen ? styles.open : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>
                    </div>
                    <nav className={`${styles.nav} ${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                        {navItems.map(({ label, href }, index) => (
                            <a key={index} href={href}>{label}</a>
                        ))}
                    </nav>
                </div>

            </header>

            <main className={`row align-items-start g-4 ${styles.main}`}>
                <section className={`col-xl-7 col-lg-7 col-md-12 ${styles.menuTitle} animate-on-visible`}>
                    <span className="fw-bold text-dark">Dr. Pedro Siqueira</span><br />
                    <span className="text-muted mb-2">Médico | Saúde Mental | CRM 97044</span><br /><br /><br />
                    <p>
                        Sou médico formado pela <strong>Universidade Federal do Rio de Janeiro (UFRJ)</strong> com <strong>Honraria Acadêmica Cum Laude</strong> e faço parte da equipe médica de residência de psiquiatria do <strong>Hospital da Polícia Militar de Minas Gerais (HPM-MG)</strong>.
                    </p><br /><br />
                    <button className={`btn ${styles.buttonP}`}>
                        <a target="_blank" href={`https://wa.me/5531995054490?text=${encodeURIComponent(contactText)}`}>
                            <img src={calender} alt="Ícone calendário" className="calenderImg" />
                            Agende sua consulta
                        </a>
                    </button>
                </section>

                <div className={`col-xl-5 col-lg-5 col-md-12 text-center" ${styles.profile}`}>
                    <img src={perfil} alt="Dr. Pedro Siqueira" className={`${styles.profileImg} animate-on-visible`} />
                </div>
            </main>
        </div>
    );
}

export default Header;
