import React from 'react'
import classes from './input.module.css'

function CustomInput ({
  label = '',
  onChange = () => { },
  value = '',
  name = '',
  type = 'text',
  error
}) {
  return (
    <div className={classes.inputContainer}>
      <label className={classes.label}>{`${label} : `}</label>
      <input type={type} onChange={(e) => onChange(e.target.value, name)} value={value} />
      {error?.message && error?.field === name ? <span>&#x26A0;</span> : <></>}
    </div>
  )
}

export default CustomInput
