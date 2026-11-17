import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <article className="task-card task-active">
      <div className="task-card-top">
        <span className="task-category">{data.category}</span>
        <span>{data.date}</span>
      </div>
      <h2>{data.title}</h2>
      <p className="task-description hide-scrollbar">{data.description}</p>
      <div className="task-actions">
        <button className="task-action action-success">Mark as Completed</button>
        <button className="task-action action-danger">Mark as Failed</button>
      </div>
    </article>
  )
}

export default AcceptTask