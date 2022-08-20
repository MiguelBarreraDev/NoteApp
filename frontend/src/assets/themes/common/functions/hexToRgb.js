import convertBase from "@/utitlities/convertBase"

export default hexToRgb = (hex=String) => {
  const r = convertBase(hex.slice(1, 3), 16, 10)
  const g = convertBase(hex.slice(3, 5), 16, 10)
  const b = convertBase(hex.slice(5, 7), 16, 10)

  return {r, g, b}
}
