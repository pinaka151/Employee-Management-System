import React from 'react'

const AcceptTask = ({data, onTaskAction, onFailTask}) => {
  return (
    <article className="task-card task-active">
      <div className="task-card-top">
        <span className="task-category">{data.category}</span>
        <span>{data.date}</span>
      </div>
      <h2>{data.title}</h2>
      <p className="task-description hide-scrollbar">{data.description}</p>
      <div className="task-actions">
        <button type="button" className="task-action action-success" onClick={onTaskAction}>Mark as Completed</button>
        <button type="button" className="task-action action-danger" onClick={onFailTask}>Mark as Failed</button>
      </div>
    </article>
  )
}

export default AcceptTask