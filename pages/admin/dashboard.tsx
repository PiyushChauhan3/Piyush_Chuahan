import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '../../components/admin/AdminLayout';

const Dashboard = () => {
  const router = useRouter();
  const [analytics, setAnalytics] = useState({
    totalPosts: 0,
    totalViews: 0,
    activeUsers: 0,
    avgSessionTime: 0
  });

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth !== 'true') {
      router.push('/admin/login');
    }
  }, []);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('/api/analytics');
        const data = await response.json();
        setAnalytics(data);
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      }
    };

    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <AdminLayout>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Posts</h3>
            <p>{analytics.totalPosts}</p>
          </div>
          <div className="stat-card">
            <h3>Total Views</h3>
            <p>{analytics.totalViews}</p>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p>{analytics.activeUsers}</p>
          </div>
          <div className="stat-card">
            <h3>Avg. Session Time</h3>
            <p>{analytics.avgSessionTime}m</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      isAdminPage: true
    }
  };
};

export default Dashboard;
