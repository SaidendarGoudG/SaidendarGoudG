const Box = props => {
  const {className, boxText} = props

  return <div className={`box ${className}`}>{boxText}</div>
}

const element = (
  <div className='boxes-bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='boxes-container'>
      <Box className='small-box' boxText='Small' />
      <Box className='medium-box' boxText='Medium' />
      <Box className='large-box' boxText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
