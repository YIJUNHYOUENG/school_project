import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() { 

  const [Check, setCheck] = useState(false);
  const [Location, setLocation] = useState("/");
  const [Login, setLogin] = useState("로그인");

  const location = useLocation();

  useEffect(() => {
    if(location.state !== null || Check === true) {
      setCheck(location.state.value);
    } else {
      setCheck(false);
    }

    LoginCheck();
  }, []);

  const onClickHandler = () => {
    axios.get('/logout')
    .then(response => {
      if(!response.data.success) {
        alert("로그아웃에 실패했습니다.")
      }
    })
  }

  const LoginCheck = () => {
    if(Check) {
      setLogin("로그아웃");
    } else {
      setLogin("로그인");
    }
    console.log(Login);

    return Login;
  }

  return (
    <div className='layout'>
      {/* header */}
      <header className='header'>
        <div className='contents'>        
          <div>
            {/* logo */}
          </div>

          <nav className='navigation'>
            <ul>
              <li><Link to="/register">회원가입</Link></li>
              <li><Link to={Location} onClick={() => {
                let name = LoginCheck();
                if(name==="로그인") { 
                  setLocation("/login");
                } else if(name==="로그아웃") { 
                  onClickHandler();
                  setLocation("/");
                  window.location.replace("/");
                }
              }}>{Login}</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* body */}
      <button onClick={onClickHandler}>
        로그아웃
      </button>
    </div>
  )
}

export default LandingPage