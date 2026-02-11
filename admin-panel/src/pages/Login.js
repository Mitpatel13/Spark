import { useState } from 'react';

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const submit = event => {
    event.preventDefault();
    if (
      form.username === ADMIN_CREDENTIALS.username &&
      form.password === ADMIN_CREDENTIALS.password
    ) {
      localStorage.setItem('spark_admin_auth', 'true');
      onLogin();
      return;
    }
    setError('Invalid credentials. Use admin/admin123');
  };

  return (
    <div className="login-page">
      <form className="card login-card" onSubmit={submit}>
        <h1>Spark Dating Admin</h1>
        <input
          placeholder="Username"
          value={form.username}
          onChange={event => setForm({ ...form, username: event.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={event => setForm({ ...form, password: event.target.value })}
        />
        {error && <p className="error">{error}</p>}
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
