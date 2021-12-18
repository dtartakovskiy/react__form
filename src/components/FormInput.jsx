import React from 'react'
import './formInput.css'

export const FormInput = ({ label, handleChange, ...inputProps }) => {
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProps} onChange={handleChange} />
    </div>
  )
}
