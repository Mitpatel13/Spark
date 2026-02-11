import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('spark_admin_auth') === 'true'
  );

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="layout">
      <Sidebar onLogout={() => {
        localStorage.removeItem('spark_admin_auth');
        setIsAuthenticated(false);
      }} />
      <main className="content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
