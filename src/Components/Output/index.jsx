import React from 'react'
import { RenderXyz } from '../Xyz'
import classes from './output.module.css'
import { isOdd, convertLettersToArray } from '../../Helpers'

function Output ({ letters, size, direction }) {
  return (
    <>
      <div className={classes.outputContainer}>
        <div className={direction === 'horizontal' ? classes.outputHorizontal : classes.outputVertical}>
          {convertLettersToArray(letters).map((letter, index) => {
            return isOdd(size) && <RenderXyz key={index} letter={letter} size={size} />
          })}
        </div>
      </div>
    </>
  )
}

export default Output
