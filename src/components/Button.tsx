import styles from './Button.module.css'
import { PlusCircle } from 'phosphor-react'


interface ButtonProps{
    text: string;
}

export function Button({ text }: ButtonProps){

    return(
        <button className={styles.button} >
            {text}
            <PlusCircle weight='bold' size={18}/>
        </button>
    )
}