import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/view/LandingPage/LandingPage';
import LoginPage from './component/view/LoginPage/LoginPage';
import RegisterPage from './component/view/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/login" element={<LoginPage/>}/>
          <Route exact path="/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
