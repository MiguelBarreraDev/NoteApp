export function toList (dict = Object) {
  return Object.keys(dict).map(e => dict[e])
}
