import React, { useEffect, useState } from 'react'
import { createBackwardSlant, createForwardSlant } from '../../Helpers/patterns'
import RenderPattern from './RenderPattern'

function X ({ size }) {
  const [patterns, setPatterns] = useState([])

  useEffect(() => {
    if (size) {
      handlePatterns(size)
    }
  }, [size])

  const handlePatterns = (lSize) => {
    const _size = Number(lSize)
    // line forward slant pattern
    const forwardPattern = createForwardSlant(_size)
    // line backward slant pattern
    const backwardPattern = createBackwardSlant(_size)

    // merged pattern
    const mergedPattern = []
    forwardPattern.forEach((arrayList, index) => {
      const backwardArrayList = backwardPattern[index]
      const mergedLetter = []

      // forward slanting line
      arrayList.forEach((letter, letterIndex) => {
        mergedLetter.push(letter)
      })

      // backward slanting line
      backwardArrayList.forEach((letter, letterIndex) => {
        if (letter !== '') mergedLetter[letterIndex] = letter
      })

      mergedPattern.push(mergedLetter)
    })
    setPatterns(mergedPattern)
  }

  return <RenderPattern patterns={patterns} />
}

export default X
