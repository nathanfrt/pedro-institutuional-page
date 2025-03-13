import styles from "./Header.module.css";
import './Header.module.css';

function Header() {
    return (
        <header className="header">
            <span className="logo">Home</span>
            
            <div className="container">
                <nav className="nav-menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#" className="menu-link">Dr. Pedro Siqueira</a>
                        </li>                    
                        <li className="menu-item">
                            <a href="#" className="menu-link">Saúde Mental</a>                    
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">Tratamentos</a>
                        </li>                    
                        <li className="menu-item">
                            <a href="#" className="menu-link">Consultório</a>
                        </li>                    
                        <li className="menu-item">
                            <a href="#" className="menu-link">Depoimentos</a>
                        </li>                    
                        <li className="menu-item">
                            <a href="#" className="menu-link">Dúvidas</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">Contato</a>
                        </li>
                    </ul>
                </nav>            
            </div>
            
        </header>
    );
}

export default Header;
