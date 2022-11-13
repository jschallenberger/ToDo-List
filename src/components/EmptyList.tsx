import { ClipboardText } from 'phosphor-react'
import styles from './EmptyList.module.css'

export function EmptyList(){

    return(
        <div className={styles.emptyList}>
            <ClipboardText color='var(--gray-400)' size={56}/>
            <p>You have not created any tasks!!</p>
            <p>Create tasks and organize your to do list</p>
        </div>
    )
}