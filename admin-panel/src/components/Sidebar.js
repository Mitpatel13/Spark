import { NavLink } from 'react-router-dom';

function Sidebar({ onLogout }) {
  return (
    <aside className="sidebar">
      <h2>Spark Admin</h2>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <button className="btn danger" onClick={onLogout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
