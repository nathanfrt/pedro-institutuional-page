import styles from "./Feedback.module.css";
import sobre from "../../Images/Sobre.jpeg";
import GoogleReviews from './GoogleReviews';
import 'bootstrap/dist/css/bootstrap.min.css';

function Feedbacks() {
    return (
        <div className={`container ${styles.feedbacks} animate-on-visible`}>
            <section className={`${styles.feedbacksCard}`}>      
                <div className={`${styles.feedbackIntroduction}`}>
                <p>Depoimentos de Pacientes</p>          
                <GoogleReviews />                
                </div>
            </section>
        </div>
    );
}

export default Feedbacks;
