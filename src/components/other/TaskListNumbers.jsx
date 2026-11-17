import React from 'react'
import { FaBolt, FaCheck, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

const TaskListNumbers = ({ data }) => {
  const metrics = [
    { key: 'newTask', label: 'New Task', icon: <FaBolt />, className: 'metric-new' },
    { key: 'active', label: 'Accepted Task', icon: <FaCheck />, className: 'metric-active' },
    { key: 'completed', label: 'Completed Task', icon: <FaCheckCircle />, className: 'metric-completed' },
    { key: 'failed', label: 'Failed Task', icon: <FaTimesCircle />, className: 'metric-failed' },
  ]

  return (
    <section className="metrics-grid" aria-label="Task summary">
      {metrics.map(({ key, label, icon, className }) => (
        <div key={key} className={`metric-card ${className}`}>
          <div className="metric-heading">
            <span>{label}</span>
            <span className="metric-icon">{icon}</span>
          </div>
          <strong>{data.taskCounts[key]}</strong>
        </div>
      ))}
    </section>
  )
}

export default TaskListNumbers
