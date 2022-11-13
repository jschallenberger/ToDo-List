import styles from './ToDo.module.css'
import { Trash } from 'phosphor-react'

interface ToDoProps{
    id: string;
}

export function ToDo({id} : ToDoProps){
    
    return(
        <div className={styles.todo}>
            <input 
                id={id}
                className={styles.checkbox} 
                type='checkbox'
            />
            <label htmlFor={id}/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor provident, doloribus, reprehenderit.</p>
            <Trash size={24}/>
        </div>
    )
}