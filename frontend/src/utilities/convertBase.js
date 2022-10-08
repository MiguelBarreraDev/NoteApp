const convertBase = (elm, currentBase, newBase) => {
  if (currentBase === newBase) return (typeof elm !== 'string') ? elm : elm.toString()
  if (typeof elm === 'number') elm = elm.toString()

  const elmToDecimalBase = parseInt(elm, currentBase)
  const elmToNewBase = elmToDecimalBase.toString(newBase)

  return elmToNewBase
}

export default convertBase
