import hexToRgb from './hexToRgb'

const rgba = (value, alpha) => {
  const initialChar = value.charAt(0)
  let rgb = null

  if (initialChar === '#') rgb = hexToRgb(value)
  else throw new Error('The first parameter is not an allowed value')

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}

export default rgba
