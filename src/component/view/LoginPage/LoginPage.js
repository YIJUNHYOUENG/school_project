import axios from 'axios';
import { response } from 'express';
import React, { useState } from 'react'

function LoginPage() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = event => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = event => {
    event.preventDefault();

    console.log('Email', Email)
    console.log('Password', Password)

    let body = {
      email: Email,
      Password: Password
    }

    axios.post('/login', body)
    .then(response)
  }

  return (
    <div style={{
      display: "flex", justifyContent: 'center', alignItems: "center",
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <lobel>Email</lobel>
        <input type="email" value={Email} onChange={onEmailHandler}/>
        <lobel>Password</lobel>
        <input type="password" value={Password} onChange={onPasswordHandler}/>
        <br/>
        <button>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage