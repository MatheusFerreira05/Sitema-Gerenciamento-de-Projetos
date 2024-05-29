import styles from './Home.module.css'
import saving from '../../img/savings.svg'
import BotaoLink from '../layout/BotaoLink'

function Home(){

    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Gerenciafy</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <BotaoLink para='/novoProjeto' texto={'Criar Projeto'}/>
            <img src={saving} alt='Gerenciafy'/>
        </section>
    )
}
export default Home