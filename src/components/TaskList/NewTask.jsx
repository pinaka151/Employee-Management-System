import React from 'react'

const NewTask = ({data, onAcceptTask}) => {
  return (
    <article className="task-card task-new">
      <div className="task-card-top">
        <span className="task-category">{data.category}</span>
        <span>{data.date}</span>
      </div>
      <h2>{data.title}</h2>
      <p className="task-description hide-scrollbar">{data.description}</p>
      <button type="button" className="task-action" onClick={onAcceptTask}>Accept Task</button>
    </article>
  )
}

export default NewTask