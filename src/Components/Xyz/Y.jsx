import React, { useEffect, useState } from 'react'
import { createBackwardSlant, createForwardSlant, createHalfVerticalStraight } from '../../Helpers/patterns'
import RenderPattern from './RenderPattern'

function Y ({ size }) {
  const [patterns, setPatterns] = useState([])

  useEffect(() => {
    if (size) {
      handlePatterns(size)
    }
  }, [size])

  const handlePatterns = (lSize) => {
    const _size = Number(lSize)
    const halfCountSize = (_size / 2) + 0.5
    // line forward slant pattern
    const forwardPattern = createForwardSlant(_size)
    // line backward slant pattern
    const backwardPattern = createBackwardSlant(_size)
    // vertical half straight line
    const downwardPattern = createHalfVerticalStraight(_size, halfCountSize)

    // merged pattern
    const mergedPattern = []
    forwardPattern.forEach((arrayList, index) => {
      const backwardArrayList = backwardPattern[index]
      const downwardArrayList = downwardPattern[index]
      let mergedLetter = []
      // forward slanting line
      arrayList.forEach((letter) => {
        mergedLetter.push(letter)
      })
      // backward slanting line
      backwardArrayList.forEach((letter, letterIndex) => {
        if (letter !== '') mergedLetter[letterIndex] = letter
      })
      // downward strain line
      if (halfCountSize <= index) {
        mergedLetter = downwardArrayList
      }

      mergedPattern.push(mergedLetter)
    })
    setPatterns(mergedPattern)
  }

  return <RenderPattern patterns={patterns} />
}

export default Y
