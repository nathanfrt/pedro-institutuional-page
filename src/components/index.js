import styles from "./Header.modules.css";

function Header(){
    return (
        <header className={styles.header}>
            <span>Home</span>
                <nav>
                    <a href="#">Dr. Pedro Siqueira</a>
                    <a href="#">Saúde Mental</a>                    
                    <a href="#">Tratamentos</a>
                    <a href="#">Consultório</a>
                    <a href="#">Depoimentos</a>
                    <a href="#">Dúvidas</a>
                    <a href="#">Contato</a>
                </nav>            
        </header>
    )
}

export default Header;