const stats = [
  { label: 'Total Users', value: 1240 },
  { label: 'Matches', value: 336 },
  { label: 'Active Chats', value: 91 },
  { label: 'Premium Users', value: 72 }
];

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Overview of your Spark Dating application.</p>
      <div className="stats-grid">
        {stats.map(item => (
          <article key={item.label} className="card">
            <p>{item.label}</p>
            <h3>{item.value}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
