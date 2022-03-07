
export const isOdd = (value) => {
  // restrict even numbers
  const size = Number(value)
  if (isNaN(size)) return false
  if (size < 3) return false
  return !!(size % 2)
}

export const convertLettersToArray = (letters) => {
  const arrayLetters = []
  if (letters) {
    for (let index = 0; index < letters.length; index++) {
      arrayLetters.push(letters[index])
    }
  }
  return arrayLetters
}

export const allowedLetters = (letters) => {
  if (letters === '' || typeof letters === 'undefined') return ''
  // remove the letters not included in the list
  const _allowedLetters = ['X', 'Y', 'Z', 'x', 'y', 'z']
  let transformedLetters = ''
  let unIdentifiedLetter = ''
  for (let index = 0; index < letters.length; index++) {
    if (_allowedLetters.includes(letters[index])) {
      transformedLetters += letters[index]
    } else {
      unIdentifiedLetter = letters[index]
    }
  }
  return [transformedLetters, unIdentifiedLetter]
}
