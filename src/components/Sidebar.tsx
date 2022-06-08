import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src='https://images.unsplash.com/photo-1592385672401-ab91fccb6fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdoaXRlJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
        
        <div className={styles.profile}>
        <Avatar src="https://github.com/GabyGiora.png" />

            <strong>Gabrielly Cordova Giora</strong>
            <span>Software Engineer</span>
        </div>
    
        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>

    </aside>

    );
}