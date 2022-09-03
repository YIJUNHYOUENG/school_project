import React from 'react'
import Header from './Header/Header';
import Body from './Body/Body';

function LandingPage() {
  return (
    <div className='layout'>
        {/* header 파일 */}
        <Header/>

        {/* body 파일 */}
        <Body/>

    </div>
  )
}

export default LandingPage