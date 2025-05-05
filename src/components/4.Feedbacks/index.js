import styles from "./Feedback.css";
import sobre from "../../Images/Sobre.jpeg";
import GoogleReviews from './GoogleReviews';
import 'bootstrap/dist/css/bootstrap.min.css';

function Feedbacks() {
    return (
        <div className="container feedbacks animate-on-visible ">
            <section className="feedbacks-card">      
                <div className="feedback-introduction">
                <p>Depoimentos de Pacientes</p>          
                <GoogleReviews />                
                </div>
            </section>
        </div>
    );
}

export default Feedbacks;
