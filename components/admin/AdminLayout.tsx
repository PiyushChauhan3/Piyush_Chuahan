import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="admin-layout">
      <nav className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <Link href="/admin/dashboard" 
                  className={router.pathname === '/admin/dashboard' ? 'active' : ''}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/posts"
                  className={router.pathname === '/admin/posts' ? 'active' : ''}>
              Posts
            </Link>
          </li>
          <li>
            <Link href="/admin/settings"
                  className={router.pathname === '/admin/settings' ? 'active' : ''}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <main className="admin-content">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
