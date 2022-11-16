import styles from './Button.module.css'
import { PlusCircle } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
}

export function Button({ text, ...props }: ButtonProps){

    return(
        <button className={styles.button} {...props}  >
            {text}
            <PlusCircle weight='bold' size={18}/>
        </button>
    )
}