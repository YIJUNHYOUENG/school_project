import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/view/LandingPage/LandingPage';
import LoginPage from './component/view/LoginPage/LoginPage';
import RegisterPage from './component/view/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/api/users" element={<LandingPage/>}/>
          <Route exact path="/api/users/login" element={<LoginPage/>}/>
          <Route exact path="/api/users/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
