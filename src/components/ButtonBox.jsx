import React from 'react'

const ButtonBox = ({handleclick , colorRamdon}) => {
  return (
    <button style={{background:colorRamdon}} className='btn' onClick={handleclick}> &#62;</button>
  )
}

export default ButtonBox