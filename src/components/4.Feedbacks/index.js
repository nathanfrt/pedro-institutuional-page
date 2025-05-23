import styles from "./Feedback.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import close from "../../Images/close.png";
import doctoralia from "../../Images/doctorl.png";
import insta from "../../Images/insta.png";
import googleReview from "../../Images/googleprev.png";
import google from "../../Images/google.png";
import stars from "../../Images/stars.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { style } from "framer-motion/client";


function Feedbacks() {
    const contactText = 'https://www.doctoralia.com.br/pedro-henrique-siqueira-2';
    const instagramURL = 'https://www.instagram.com/siqueirapsiquiatria/';
    const doctoraliaURL = 'https://www.doctoralia.com.br/pedro-henrique-siqueira-2/psiquiatra/rio-de-janeiro#profile-reviews';
    const googleReviewURL = 'https://www.google.com/search?sca_esv=61711e8701c58ca5&rlz=1C1ONGR_enBR1145BR1145&sxsrf=AHTn8zrpqo4OHEJiQlzR42HlsrhRKW4PVA:1747931652819&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzbe6LhHR2NGkg04A7FysV1mmtakplxfRnlWEsc-zfh5-_GZBqzCORtHt1DuzwTCRFQ0f09g0tHSe3GybazDyn8kDxx1XA4rNR_82SkxoQb-PKpEG_e07B1BgxEygo2c46G0iZSt5FQXn4dUNePeSlrqVD2CL2eKDZM9YoTIGFPnwNI9M9w%3D%3D&q=Dr.+Pedro+Siqueira+Psiquiatria+-+Belo+Horizonte+-+Presencial+e+Online+Coment%C3%A1rios&sa=X&ved=2ahUKEwj4-IbqwLeNAxWeIbkGHfwPOocQ0bkNegQIPBAE&cshid=1747931666739950&biw=1920&bih=945&dpr=1#lrd=0xa699a237f90def:0x8539f58ffdac3e7d,1,,,,';
    const googleSearchURL = 'https://www.google.com/search?q=Dr.+Pedro+Siqueira+Psiquiatra+BH&sca_esv=61711e8701c58ca5&rlz=1C1ONGR_enBR1145BR1145&sxsrf=AHTn8zoXNaXeh-gdjWmmzE_1RHEnJnfF5g%3A1747931648336&ei=AFIvaPymFN6DhuMPi_KgoA8&ved=0ahUKEwj8pvbnwLeNAxXegWEGHQs5CPQQ4dUDCBA&uact=5&oq=Dr.+Pedro+Siqueira+Psiquiatra+BH&gs_lp=Egxnd3Mtd2l6LXNlcnAiIERyLiBQZWRybyBTaXF1ZWlyYSBQc2lxdWlhdHJhIEJIMgUQIRigATIFECEYoAFIgQ5Q0wJYogtwAHgAkAEAmAGkAaABjgSqAQMwLjS4AQPIAQD4AQGYAgSgApwEwgIHEAAYsAMYHsICCRAAGLADGAgYHsICCxAAGIAEGLADGKIEwgIIEAAYsAMY7wXCAgsQABiwAxiiBBiJBcICBhAAGBYYHsICCBAAGIAEGKIEwgIFEAAY7wXCAggQABiiBBiJBZgDAOIDBRIBMSBAiAYBkAYHkgcDMC40oAeIDrIHAzAuNLgHnAQ&sclient=gws-wiz-serp';

    const cards = [
        {
            id: 1,
            title: "Carol",
            desc: "Um excelente médico! Escuta com atenção e é muito atencioso. O tratamento que estou fazendo com ele está dando um ótimo resultado. Super indico!"
        },
        {
            id: 2,
            title: "Maria",
            desc: "Dr. Pedro é inteligente, atencioso e passa muita confiança. A estrutura do seu consultório é super aconchegante e a consulta flui com leveza. Recomendo muito!"
        },
        {
            id: 3,
            title: "Luíza",
            desc: "Um achado em BH. O dr. Pedro é um excelente médico, muito atencioso, sempre ouvindo seus pacientes com cuidado. Além disso, o consultório é bem localizado e é um ambiente agradável e acolhedor. Super índico!"
        },
        {
            id: 4,
            title: "Giovana",
            desc: "Sempre recomendo o dr. Pedro, pela confiança que tenho em seu trabalho. Profissional extremamente qualificado, ótimo ouvinte e muito atencioso."
        },
        {
            id: 5,
            title: "Ana",
            desc: "Excelente profissional, extremamente humano e atencioso, explica todo o processo de forma clara e bastante acessível. Indiquei para meu familiares e todos tiveram a mesma percepção o que tem facilitado bastante o tratamento."
        },
        {
            id: 6,
            title: "Theodoro",
            desc: "Dr Pedro e é um médico diferenciado. Sempre muito cuidadoso e profissional. Te ouve, te acolhe e te ajuda a enfrentar os seus problemas. Recomendo a todos."
        },
        {
            id: 7,
            title: "Rayssa",
            desc: "médico diferenciado! recomendo demais! além do consultório ser extremamente confortável e de atmosfera relaxante, dr siqueira foi atencioso e didático demais. me ajuda até hoje!"
        },
        {
            id: 8,
            title: "Vanessa",
            desc: "Pedro é um profissional excelente!!! É muito confortante encontrar um profissional tão eficiente, que ama a profissão, atende de forma incrível, muito capacitado."
        },
        {
            id: 9,
            title: "Brenda",
            desc: "Profissional excelente! Cuidadoso e competente. Recomendo de olhos fechados!"
        },
        {
            id: 10,
            title: "Amanda",
            desc: "Um ótimo médico! Precisava de uma consulta com uma certa urgência e consegui um bom horário. O atendimento foi humanizado e muito eficaz. Tem atenção e escuta o paciente. Super indico!"
        },
        {
            id: 11,
            title: "Larissa",
            desc: "Postura impecável, abordagem humanizada. O consultório é um espaço acolhedor e bem planejado, refletindo seu profissionalismo e cuidado com os pacientes."
        }
    ];

    return (
        <div className={`container ${styles.feedbacks} animate-on-visible`}>
            <section className={`${styles.feedbacksCard}`}>

                <div className={` justify-content-between align-items-center  ${styles.card}`}>
                    <div className={`${styles.feedbackIntroduction}`}>
                        <p>Depoimentos de Pacientes</p>
                        <p>Convido você a conhecer as experiências de outros pacientes acessando <a href={doctoraliaURL}>meu perfil no
                            <b> Doctoralia</b></a> ou pelas <a href={googleSearchURL}>avaliações no <b>Google.</b></a></p>
                    </div>
                    <div className={styles.cardsImg}>
                        <div className={styles.cardReviewGoogle}>
                            <a href={googleReviewURL}>
                            <span>Excelente</span><br/>
                            <img src={stars} />
                            <p>Com base em <b>20 avaliações</b></p>
                            <img src={google} />
                            </a>
                        </div>
                        {/* <button className="btn btn-success animate-on-visible ">
                            <a target="_blank" href={doctoraliaURL}>
                                <img src={doctoralia} alt="Ícone Google" className="doctorImg" />
                            </a>
                        </button>

                        <button className="btn btn-success animate-on-visible ">
                            <a target="_blank" href={instagramURL}>
                                <img src={insta} alt="Ícone Google" className="instagramImg" />
                            </a>
                        </button>

                        <button className="btn btn-success animate-on-visible ">
                            <a target="_blank" href={googleReviewURL}>
                                <img src={googleReview} alt="Ícone Google" className="googleImg" />
                            </a>
                        </button> */}
                    </div> 
                </div>


                <div className={`d-flex justify-content-between align-items-center mb-5 ${styles.card}`}>

                    <div className={`col-md-12 ${styles.herselfCard}`}>
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                }
                            }}
                        >
                            {cards.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={`${styles.slideNav}`}>
                                        <div className={`${styles.cardImg}`}>
                                            <img src={close} alt="Slider" className={`${styles.slideItem} `} />
                                        </div><br />
                                        <p className={`${styles.slideDescription}`}>{item.desc}</p>
                                        <p className={`${styles.slideTitle}`}>{item.title}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>


            </section>
        </div>
    );

    /*<div className={`container ${styles.feedbacks} animate-on-visible`}>
        <section className={`${styles.feedbacksCard}`}>      
            <div className={`${styles.feedbackIntroduction}`}>
            <p>Depoimentos de Pacientes</p>          
            <GoogleReviews />                
            </div>
        </section>
    </div>
);*/
}

export default Feedbacks;
