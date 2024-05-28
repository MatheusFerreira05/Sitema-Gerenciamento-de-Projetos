import { Link } from 'react-router-dom'
import Container from './Container'
import style from './BarraNavegacao.module.css'
import logo from '../../img/logo.png'

function BarraNavegacao(){

    return(
        <>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/empresa'>Empresa</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/novoprojeto'>Novo Projeto</Link>
        </ul>
        </>
    )
}

export default BarraNavegacao