import React from 'react'
import classes from "./Modal.module.css"

function Modal(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

export default Modal