import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminIndex() {
  const router = useRouter();
  
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth === 'true') {
      router.push('/admin/dashboard');
    } else {
      router.push('/admin/login');
    }
  }, []);

  return null;
}

export const getServerSideProps = async () => {
  return {
    props: {
      isAdminPage: true
    }
  };
};
