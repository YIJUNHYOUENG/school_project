import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from "../../../_action/user_action";
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = event => {
    setEmail(event.currentTarget.value)
  }

  const onNameHandler = event => {
    setName(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = event => {
    setConfirmPassword(event.currentTarget.value)
  }

  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = event => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
    .then(response => {
      console.log(response)
      if(response.payload.loginSuccess) {
        navigate('/');
      } else {
        alert("Error")
      }
    })
  }

  return (
    <div style={{
      display: "flex", justifyContent: 'center', alignItems: "center",
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}/>

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler}/>

        <label>Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}/>
        <br/>
        <button>
          LoginPage
        </button>
      </form>
    </div>
  )
}

export default RegisterPage