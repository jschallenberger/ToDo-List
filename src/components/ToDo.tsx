import styles from './ToDo.module.css'
import { Trash } from 'phosphor-react'

interface ToDoProps{
    id?: string;
    text?: string;
    onClickFunction:Function,
    handleFinished: Function
}

export function ToDo({id, text, onClickFunction, handleFinished} : ToDoProps){
    
    return(
        <div className={styles.todo}>
            <input 
                id={id}
                className={styles.checkbox} 
                type='checkbox'
                onClick={()=>handleFinished(id)}
            />
            <label htmlFor={id}/>
            <p>{text}</p>
            <Trash onClick={()=>onClickFunction(id)} size={24}/>
        </div>
    )
}