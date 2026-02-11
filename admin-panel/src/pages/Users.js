import { useMemo, useState } from 'react';

const seedUsers = [
  { id: 'u1', name: 'John Doe', age: 28, gender: 'Male', status: 'verified' },
  { id: 'u2', name: 'Jane Smith', age: 26, gender: 'Female', status: 'premium' },
  { id: 'u3', name: 'Alex Kim', age: 30, gender: 'Male', status: 'active' }
];

function Users() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => seedUsers.filter(user => user.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div>
      <h1>Users</h1>
      <input
        className="search"
        placeholder="Search users"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
