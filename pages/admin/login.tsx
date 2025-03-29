import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      alert('Please fill in both fields');
      return;
    }
    // Simulate an authentication request
    const isAuthenticated = credentials.username === 'admin' && credentials.password === 'admin@111';
    if (!isAuthenticated) {
        alert('Invalid credentials');
        return;
        }
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/admin/dashboard');
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export function getStaticProps() {
  return {
    props: {
      isAdminPage: true
    }
  };
}

export default Login;