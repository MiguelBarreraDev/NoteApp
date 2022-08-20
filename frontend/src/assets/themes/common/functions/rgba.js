import hexToRgb from './hexToRgb'

export default rgba = (value, alpha) => {
  const initialChar = value.charAt(0)
  let rgb = null

  if (initialChar === '#') rgb = hexToRgb(value)
  else throw 'The first parameter is not an allowed value'

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}
