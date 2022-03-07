
import { createContext, useState } from 'react'
import { CustomInput, CustomSelect, Output } from '../Components'
import { allowedLetters, isOdd } from '../Helpers'
import classes from '../app.module.css'
import { DIRECTION, HORIZONTAL, LETTERS, SIZE } from '../Constants'

export const XyzMachineContext = createContext()

function XyzMachine () {
  const [patternLetter] = useState('o')
  const [entries, setEntries] = useState({ letters: '', size: '', direction: HORIZONTAL })
  const [validateError, setValidateError] = useState({})

  const handleChange = (value, fieldName) => {
    const entriesCopy = { ...entries }
    setEntries({ ...entriesCopy, [fieldName]: value })
  }

  return (
    <XyzMachineContext.Provider value={patternLetter}>
      <div className={classes.grid}>
        <div className={classes.upperItem}>
          <h2>XYZ Machine Problem</h2>
          <CustomInput
            label='Letters'
            name={LETTERS}
            value={entries.letters}
            onChange={(value, fieldName) => {
              const [allowedValue, unIdentifiedLetter] = allowedLetters(value)
              if (unIdentifiedLetter) {
                alert('Please select X, Y, Z letters only')
              }
              handleChange(allowedValue, fieldName)
            }}
          />
          <CustomInput
            label='Size'
            type='number'
            name={SIZE}
            value={entries.size}
            error={validateError}
            onChange={(value, fieldName) => {
              const numberValue = Number(value)
              switch (numberValue < 3) {
                case (true):
                  setValidateError({ message: 'Input must be greater than or equal to 3', field: SIZE })
                  break
                default:
                  if (isOdd(numberValue)) {
                    setValidateError({})
                  } else {
                    setValidateError({ message: 'Input must be odd number', field: SIZE })
                  }
              }
              handleChange(value, fieldName)
            }}
          />
          <CustomSelect
            label='Direction' name={DIRECTION}
            value={entries.direction}
            onChange={handleChange}
          />
          <div className={classes.error}>
            <span>{validateError?.message}</span>
          </div>
        </div>
        <div>
          <Output {...entries} />
        </div>
      </div>
    </XyzMachineContext.Provider>
  )
}

export default XyzMachine
