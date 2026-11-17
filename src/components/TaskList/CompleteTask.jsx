import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <article className="task-card task-complete">
      <div className="task-card-top">
        <span className="task-category">{data.category}</span>
        <span>{data.date}</span>
      </div>
      <h2>{data.title}</h2>
      <p className="task-description hide-scrollbar">{data.description}</p>
      <button className="task-action action-success">Completed</button>
    </article>
  )
}

export default CompleteTask