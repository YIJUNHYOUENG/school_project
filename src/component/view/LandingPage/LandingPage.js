import React, { useEffect } from 'react'
import axios from 'axios';

function LandingPage() {

  useEffect(() => {
    console.log(222)
    axios.get('/api/users')
    .then(response => console.log(response))
  }, []);

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage