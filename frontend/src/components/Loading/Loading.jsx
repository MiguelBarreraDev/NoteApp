import './Loading.css'

const Loading = () => {
  return (
    <div className='container_spinner'>
      <div className='lds-ellipsis'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loading
