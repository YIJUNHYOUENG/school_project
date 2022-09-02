import React from 'react'
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function LandingPage() {
  return (
    <div>
        {/* header 파일 */}
        <Header/>

        {/* body 파일 */}
        <Body/>

        {/* footer 파일 */}
        <Footer/>
    </div>
  )
}

export default LandingPage