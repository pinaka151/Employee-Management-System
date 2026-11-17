import React, { useContext, useState } from "react";
import { FaArrowCircleLeft, FaPlus } from "react-icons/fa";
import { Authcontext } from "../../context/AuthProvider";

const CreateTask = ({ setShowCreateTask }) => {
  const [UserData, setUserData] = useContext(Authcontext)
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, settaskDescription] = useState("")
  const [taskDate, settaskDate] = useState("")
  const [asignTo, setAsignTo] = useState("")
  const [category, setCategory] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    if (!Array.isArray(UserData)) {
      console.error('UserData is not an array', UserData)
      return
    }

    const updatedEmployees = UserData.map(emp => {
      if (emp.firstName === asignTo) {
        const updatedTasks = Array.isArray(emp.tasks) ? [...emp.tasks, newTask] : [newTask]
        const updatedTaskCounts = {
          ...emp.taskCounts,
          newTask: (Number(emp.taskCounts?.newTask) || 0) + 1
        }

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: updatedTaskCounts
        }
      }
      return emp
    })

    setUserData(updatedEmployees)
    if (typeof globalThis.setLocalStorage === 'function') {
      globalThis.setLocalStorage(updatedEmployees)
    } else {
      localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }

    console.log(updatedEmployees)
    setTaskTitle('')
    settaskDescription('')
    settaskDate('')
    setCategory('')
    setAsignTo('')
  }

  return (
    <section className="create-task-panel">
      <div className="form-heading">
        <button
          type="button"
          className="form-back-button"
          onClick={() => setShowCreateTask(false)}
          aria-label="Hide task form"
        >
          <FaArrowCircleLeft />
        </button>
        <FaPlus />
        <h2>Create Task</h2>
      </div>
      <form onSubmit={submitHandler} className="task-form">
        <label className="form-field">
          Task Title
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder="Make a UI design"
          />
        </label>

        <label className="form-field">
          Date
          <input
            value={taskDate}
            onChange={(e) => settaskDate(e.target.value)}
            type="date"
          />
        </label>

        <label className="form-field">
          Assign to
          <input
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            type="text"
            placeholder="Employee name"
          />
        </label>

        <label className="form-field">
          Category
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Design, development, etc."
          />
        </label>

        <label className="form-field field-wide">
          Description
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            placeholder="Describe the task here..."
          />
        </label>

        <button type="submit" className="primary-button field-wide">Create Task</button>
      </form>
    </section>
  )
}

export default CreateTask
