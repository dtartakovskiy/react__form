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
      label: 'User name',
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
    },
    {
      id: 3,
      name: 'birthday',
      type: 'text',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm password',
      label: 'Confirm password',
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
    console.log('submitted')
  }

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
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
