import React, { useEffect, useState } from 'react'
import { createBackwardSlant, createStraightLine } from '../../Helpers/patterns'
import RenderPattern from './RenderPattern'

function Z ({ size }) {
  const [patterns, setPatterns] = useState([])

  useEffect(() => {
    if (size) {
      handlePatterns(size)
    }
  }, [size])

  const handlePatterns = (lSize) => {
    const _size = Number(lSize)
    // this is straight line
    const straightLine = createStraightLine(_size)
    // line backward slanting pattern
    const slantingPattern = createBackwardSlant(_size)

    // merged pattern
    const mergedPattern = []
    slantingPattern.forEach((arrayList, index) => {
      let mergedLetter = []

      // backward slanting line
      arrayList.forEach((letter) => {
        mergedLetter.push(letter)
      })

      if (index === 0) {
        mergedLetter = straightLine
      }
      if (index === _size - 1) {
        mergedLetter = straightLine
      }
      mergedPattern.push(mergedLetter)
    })

    setPatterns(mergedPattern)
  }

  return <RenderPattern patterns={patterns} />
}

export default Z
