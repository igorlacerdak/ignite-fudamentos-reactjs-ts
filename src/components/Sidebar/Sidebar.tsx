import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            alt="" />

            <div className={styles.profile}>
                <Avatar hasBorder src='https://avatars.githubusercontent.com/u/48698617?v=4'/>
                <strong>Igor Lacerda Santos</strong>
                <span>Desenvolvedor de Sistemas</span>
            </div>


            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
