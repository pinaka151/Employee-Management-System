import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="dashboard-shell">
      <Header changeUser={props.changeUser} data={props.data} />
      <main className="dashboard-main">
        <section className="welcome-row">
          <div>
            <h1>Your workspace</h1>
            <p>Here&apos;s what&apos;s happening with your tasks today.</p>
          </div>
        </section>
        <TaskListNumbers data={props.data} />
        <section className="tasks-section">
          <h2 className="section-label">Your tasks</h2>
          <TaskList data={props.data} />
        </section>
      </main>
    </div>
  )
}

export default EmployeeDashboard
