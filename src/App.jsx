import React, { useState } from 'react'
import './app.css'

import { FormInput } from './components'

export const App = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Name',
      errorMessage:
        "User name should be 3-16 chars and shouldn't include any special chars",
      label: 'User name',
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}$',
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email adsress',
      label: 'Email',
      required: true,
      pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      errorMessage: '',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'It should be 8-20 chars and include at least 1 letter, 1 number and  special char',
      label: 'Password',
      required: true,
      pattern:
        '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm password',
      errorMessage: "Password doesn't not match",
      label: 'Confirm password',
      required: true,
      pattern: values.password,
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form values', JSON.stringify(values, null, 2))
  }

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map(({ id, ...rest }) => (
          <FormInput
            key={id}
            {...rest}
            value={values[inputs.name]}
            handleChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}
