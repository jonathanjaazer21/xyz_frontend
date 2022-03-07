import X from './X'
import Y from './Y'
import Z from './Z'

const RenderXyz = ({ letter, size }) => {
  if (letter === 'x' || letter === 'X') {
    return <X size={size} />
  }
  if (letter === 'y' || letter === 'Y') {
    return <Y size={size} />
  }
  return <Z size={size} />
}

export { RenderXyz }
