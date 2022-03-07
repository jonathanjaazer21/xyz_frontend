import React from 'react'
import { HORIZONTAL, VERTICAL } from '../../Constants'
import classes from './customSelect.module.css'

function CustomSelect ({ label = '', onChange = () => { }, value = '', name = '' }) {
  return (
    <div className={classes.inputContainer}>
      <label className={classes.label}>{`${label} : `}</label>
      <select onChange={(e) => onChange(e.target.value, name)} value={value}>
        <option value={HORIZONTAL}>
          Horizontal
        </option>
        <option value={VERTICAL}>
          Vertical
        </option>
      </select>
    </div>
  )
}

export default CustomSelect
