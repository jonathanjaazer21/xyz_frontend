// produce an array of "o" and ""
const filledWithValue = (count, _size) => {
  const arrayList = []
  const containerList = new Array(_size).fill().map((n, index) => index + 1)

  containerList.forEach((containerCount) => {
    if (count === containerCount) {
      arrayList.push('x')
    } else {
      arrayList.push('')
    }
  })
  return arrayList
}

// produce an array of "o" and ""
const handleHalfVerticalStraightLine = (count, _size, halfCountSize) => {
  const arrayList = []
  const containerList = new Array(_size).fill().map((n, index) => index + 1)

  containerList.forEach((containerCount) => {
    if (containerCount === halfCountSize && count <= halfCountSize) {
      arrayList.push('x')
    } else {
      arrayList.push('')
    }
  })
  return arrayList
}

export const createForwardSlant = (_size) => {
  const pattern = []
  // line forward pattern
  for (let count = 1; count <= _size; count++) {
    pattern.push(filledWithValue(count, _size))
  }
  return pattern
}

export const createBackwardSlant = (_size) => {
  const pattern = []
  // line forward pattern
  for (let count = _size; count >= 1; count--) {
    pattern.push(filledWithValue(count, _size))
  }
  return pattern
}

export const createHalfVerticalStraight = (_size, halfCountSize) => {
  const pattern = []
  // line downward pattern
  for (let count = _size; count >= 1; count--) {
    pattern.push(handleHalfVerticalStraightLine(count, _size, halfCountSize))
  }
  return pattern
}

export const createStraightLine = (_size) => {
  return new Array(_size).fill().map(() => 'x')
}
