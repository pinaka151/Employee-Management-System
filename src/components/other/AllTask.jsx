import React, { useContext } from 'react'
import { FaUsers } from 'react-icons/fa'
import { Authcontext } from '../../context/AuthProvider'

const AllTask = () => {
  const [UserData] = useContext(Authcontext)

  return (
    <section className="all-task-panel">
      <div className="all-task-heading">
        <h2>Team task overview</h2>
        <span className="metric-icon"><FaUsers /></span>
      </div>
      <div className="table-head">
        <span>Employee Name</span>
        <span>New Task</span>
        <span>Active</span>
        <span>Completed</span>
        <span>Failed</span>
      </div>
      <div className="employee-list hide-scrollbar">
        {UserData.map((elem, idx) => (
          <div key={idx} className="employee-row">
            <strong>{elem.firstName}</strong>
            <span className="count-new">{elem.taskCounts.newTask}</span>
            <span className="count-active">{elem.taskCounts.active}</span>
            <span className="count-completed">{elem.taskCounts.completed}</span>
            <span className="count-failed">{elem.taskCounts.failed}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AllTask
