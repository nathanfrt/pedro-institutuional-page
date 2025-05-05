import logo from "../../Images/logo preto.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (

        <div className="container prefooter animate-on-visible ">
            <section className="prefooter-section">
                <div className="logo-footer">
                    <img src={logo} />
                </div>
            </section>
        </div>
    );
}

export default Footer;
