import styles from './Info.module.css'

export function Info(){

    return(
        <div className={styles.info}>
            <div className={styles.infoSide}>
                <p>Created Tasks</p>
                <span>0</span>
            </div>
            <div className={styles.infoSide}>
                <p>Done</p>
                <span>0</span>
            </div>
        </div>
    )
}