import React, { useState } from 'react'
import axios from 'axios'
export default function Form() {
  const [input, setInput] = useState(null)
  const inputsHandler = (e) => {
    setInput(e.target.value)
  }

  const submetform = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:8000/bankapi/adduser', {
        passportId: Number(input)
    })
    console.log(res);
  }
  return (
    <div>
      <form onSubmit={(e) => submetform(e)}>
        <label>age:</label>
        <input type={'text'} maxLength={9} name={'passportId'} onChange={inputsHandler} />
        <input type={'submit'} value={'submit'} />
      </form>
    </div>
  )
}
