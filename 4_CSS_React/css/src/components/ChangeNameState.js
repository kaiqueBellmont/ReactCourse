import React from 'react'
const names = ["Kaique", "Mateus"];

const ChangeColor = ({ handleName }) => {
  return (
    <div>
      <button onClick={() => handleName(names[0])}>Kaique</button>
      <button onClick={() => handleName(names[1])}>Mateus</button>
    </div>
  )
}

export default ChangeColor