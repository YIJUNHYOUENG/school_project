import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function LandingPage() {

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

  return (
    <div>
      <header>
        <div>
          {/* logo */}
        </div>

        <nav>
          <ul>
            <li><Link to="/register">회원가입</Link></li>
            <li><Link to="/login">로그인</Link></li>
          </ul>
        </nav>
      </header>

      <button onClick={onClickHandler}>
        로그아웃
      </button>
    </div>
  )
}

export default LandingPage