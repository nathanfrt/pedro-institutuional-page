import logo from "../../Images/logo preto.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Prefooter() {
    return (
        <div className="container prefooter">
            <section className="prefooter-section">
                <div className="logoFooter">
                    <img src={logo} />
                </div>
            </section>
        </div>
    );
}

export default Prefooter;
