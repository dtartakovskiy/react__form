import React, { useState } from 'react'
import './formInput.css'

export const FormInput = ({
  label,
  errorMessage,
  handleChange,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => setFocused(true)

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}
