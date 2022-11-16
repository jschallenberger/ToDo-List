import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Info } from './components/Info'
import { EmptyList } from './components/EmptyList'
import { ToDo } from './components/ToDo'

interface ToDo{
  id?: string;
  text?: string;
  isFinished?: boolean;
}

function App() {

  const [todoText, setToDoText] = useState<string>('')
  const [toDos, setTodos] = useState<ToDo[]>([])

  function newToDo(){
    if(todoText !== ''){
      setTodos([...toDos, 
          {
            id: Math.random().toString(),
            text: todoText,
            isFinished: false
          }
      ])

      setToDoText('')
    }
  }

  function deleteToDo(idToDelete: string){
    const result: ToDo[] = toDos.filter(toDo=> toDo.id !== idToDelete)
    setTodos(result)
  }

  function handleIsFinished(idToFinish: string){
    const newToDos: ToDo[] = toDos.map(todo=>{
      todo.id === idToFinish ? todo.isFinished = !todo.isFinished : todo
      return todo
    })
    setTodos(newToDos)
  }

  return (
    <div className={styles.app}>

      <Header/>

      <div className={styles.body}>

        <div className={styles.newtodo}>
          <Input 
            value={todoText} 
            onChange={(e)=>setToDoText(e.target.value)
            } 
            placeholder='Add new task'
          />
          <Button 
            text='Create'
            onClick={newToDo}
          />
        </div>

      <Info 
        createdTasks={toDos.length} 
        finishedTasks={toDos.reduce((acc, todo)=>{
          if(todo.isFinished){
            return acc + 1
          }
          return acc
        }, 0)
      }
      />
      
      {
        toDos.length === 0 ? <EmptyList/> : 
          
        toDos.map(toDo=>{
            return(
                    <ToDo 
                      key={toDo.id} 
                      id={toDo.id} 
                      text={toDo.text} 
                      onClickFunction={deleteToDo}
                      handleFinished={handleIsFinished}
                    />
            )
        })
      }

      </div>
    </div>
  )
}

export default App
