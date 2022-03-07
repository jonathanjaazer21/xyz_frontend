import React, { useContext } from 'react'
import { XyzMachineContext } from '../../Pages/XyzMachine'
import classes from './xyz.module.css'

function RenderPattern ({ patterns = [] }) {
  const patternLetter = useContext(XyzMachineContext)
  return (
    <div className={classes.container}>
      {patterns.map((list, patternIndex) => {
        return (
          <div key={patternIndex} className={classes.containerItems}>
            {list.map((letter, letterIndex) => {
              return <span key={letterIndex}>{letter && patternLetter}</span>
            })}
          </div>
        )
      })}
    </div>
  )
}

export default RenderPattern
