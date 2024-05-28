import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './BarraNavegacao.module.css'
import logo from '../../img/logo.png'

function BarraNavegacao(){

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt='Logo gerenciafy'/></Link>
                <ul className={styles.lista}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projetos'>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/empresa'>Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contato'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default BarraNavegacao