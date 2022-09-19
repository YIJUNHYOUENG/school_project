import React from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() { 

  // function constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLogin: false,
  //     accessToken: "",
  //   };
  // }

  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get('/logout')
    .then(response => {
      if(response.data.success) {
        navigate('/login');
      } else {
        alert("로그아웃에 실패했습니다.")
      }
    })
  }

  const LoginCheck = () => {
    let check = "로그인";
    axios.get('/login')
    .then(response => {
      if(response.payload.loginSuccess) {
        console.log(true)
        check = "로그아웃";
      }
    })
    return check;
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
              <li><Link to="/login">{LoginCheck()}</Link></li>
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