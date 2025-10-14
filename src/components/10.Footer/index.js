import styles from "./Footer.module.css";
import logo from "../../Images/logo preto.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className={`container ${styles.footer}`}>
            <section className={styles.section}>                
                <div className={styles.information}>
                    <span>Dr. Pedro Henrique Siqueira © Copyrights 2025. Todos os direitos reservados.</span>
                    <p><a href="https://wa.me/31992239776">Desenvolvido por Nathan Freitas</a></p>
                </div>
            </section>
        </div>
        
    );
}

export default Footer;
