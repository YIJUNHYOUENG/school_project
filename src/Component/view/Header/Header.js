import React from 'react'
import "./header.css";

function Header() {
  return (
    <header className='header'>
      <div className='contents'>
        <div>
          로고 자리
        </div>

        <nav className='navigation'>
          <ul>
            <li>회원가입</li>
            <li>로그인</li>
            <li>메뉴2</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header