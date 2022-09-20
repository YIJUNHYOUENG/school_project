import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() { 

  let loginCheck;
  let loc = "/login"

  const [Check, setCheck] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   LoginCheck()
  // }, []);

  const onClickHandler = () => {
    axios.get('/logout')
    .then(response => {
      if(!response.data.success) {
        alert("로그아웃에 실패했습니다.")
      }
    })
  }

  const LoginCheck = () => {
    if(location.state !== null || location.state.value) {
      setCheck(location.state.value);
    }
    if(Check) {
      loginCheck = "로그아웃";
    } else {
      loginCheck = "로그인";
    }

    return loginCheck;
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
              <li><Link to={loc} onClick={() => {
                let name = LoginCheck();
                if(name==="로그아웃") {
                  onClickHandler();
                  loc = "/";
                } else if(name==="로그인") {
                  loc = "/login";
                }
              }}>{LoginCheck()}</Link></li>
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