import React, { useState } from 'react'
import './style.css'

const Hello = () => {
  const handleChange = event => {
    setValue(event.target.value)
  }

  const [value, setValue] = useState('')

  return (
    <div className="container">
      <h1>Escreva seu texto abaixo:</h1>
      <textarea value={value} onChange={handleChange} cols="60" rows="10" />
      <button onClick={() => setValue(value.toUpperCase())}>
        Convert UPPERCASE
      </button>
    </div>
  )
}

export default Hello
