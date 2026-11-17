import React from 'react'

const FailedTask = ({data}) => {
  return (
    <article className="task-card task-failed">
      <div className="task-card-top">
        <span className="task-category">{data.category}</span>
        <span>{data.date}</span>
      </div>
      <h2>{data.title}</h2>
      <p className="task-description hide-scrollbar">{data.description}</p>
      <button className="task-action action-danger">Failed Task</button>
    </article>
  )
}

export default FailedTask