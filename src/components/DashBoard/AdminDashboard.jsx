import React, { useState } from 'react'
import { FaArrowLeft, FaClipboardList, FaPlus } from 'react-icons/fa'
import HEADER from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  const [showCreateTask, setShowCreateTask] = useState(true)

  return (
    <div className="dashboard-shell">
      <HEADER changeUser={props.changeUser} firstName="vipin" />
      <main className="dashboard-main">
        <section className="admin-title-row">
          <div>
            <span className="admin-title-icon"><FaClipboardList /></span>
            <div>
              <h1>Admin dashboard</h1>
              <p>Create tasks and keep track of your team&apos;s progress.</p>
            </div>
          </div>
        </section>
        <div className="admin-grid">
          {showCreateTask ? (
            <CreateTask setShowCreateTask={setShowCreateTask} />
          ) : (
            <button className="create-task-trigger" onClick={() => setShowCreateTask(true)}>
              <FaArrowLeft /> <FaPlus /> Create Task
            </button>
          )}
          <AllTask />
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
