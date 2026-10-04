import { useState } from "react"
import "./App.css"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTask("")
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id))
  }

  return (
    <div className="todo-container">
      <div className="todo-card">

        <h1>My To-Do List</h1>

        <div className="input-area">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask()
              }
            }}
          />

          <button onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="task-list">
          {tasks.map((item) => (
            <div className="task-item" key={item.id}>

              <span className={item.completed ? "completed" : ""}>
                {item.text}
              </span>

              <div className="task-buttons">
                <button onClick={() => toggleTask(item.id)}>
                  {item.completed ? "Undo" : "Done"}
                </button>

                <button
                  className="delete-button"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
