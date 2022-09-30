import { Link } from 'react-router-dom'

const LinkStyles = {
  textDecoration: 'none',
  padding: '0',
  color: '#FFFFFF'
}

export default function LinkTo (props) {
  const { styles = {}, ...otherProps } = props
  return <Link style={{ ...LinkStyles, ...styles }} { ...otherProps }/>
}
