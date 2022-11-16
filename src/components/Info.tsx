import styles from './Info.module.css'

interface InfoProps{
    createdTasks: number,
    finishedTasks: number
  }

export function Info({createdTasks, finishedTasks} : InfoProps){

    return(
        <div className={styles.info}>
            <div className={styles.infoSide}>
                <p>Created Tasks</p>
                <span>{createdTasks}</span>
            </div>
            <div className={styles.infoSide}>
                <p>Finished</p>
                <span>{finishedTasks} of {createdTasks}</span>
            </div>
        </div>
    )
}