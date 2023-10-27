import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from './scenes/homePage/HomePage';
import LoginPage from './scenes/loginPage/LoginPage';
import Dashboard from './scenes/dashboardPage/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
