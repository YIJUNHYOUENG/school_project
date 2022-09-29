import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() { 

  const [Check, setCheck] = useState(false);
  const [Location, setLocation] = useState("#");
  const [Login, setLogin] = useState(Check ? "로그아웃":"로그인");

  const location = useLocation();

  useEffect(() => {
    // Check를 통해 로그인 확인
    try {
      if(location.state !== null || location.state.value === true) {
        setCheck(location.state.value);
      } else {
        setCheck(false);
      }
    } catch {
      return
    }
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
                let check = LoginCheck();
                if(check === "로그인") {
                  setLocation("/login");
                } else {
                  onClickHandler();
                  setLocation("#");
                  location.reload();
                }
              }}>{Login}</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* body */}
    </div>
  )
}

export default LandingPage