import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Info } from './components/Info'
import { EmptyList } from './components/EmptyList'
import { ToDo } from './components/ToDo'

function App() {

  const [toDos, setTodos] = useState([1,2,3])

  return (
    <div className={styles.app}>

      <Header/>

      <div className={styles.body}>

        <div className={styles.newtodo}>
          <Input placeholder='Add new task'/>
          <Button text='Create'/>
        </div>

      <Info/>
      
      {

        toDos.length === 0 ? <EmptyList/> : 
          
        toDos.map(toDo=>{
            return(<ToDo id={Math.random().toString()}/>)
          })
        
      }

      </div>
    </div>
  )
}

export default App
