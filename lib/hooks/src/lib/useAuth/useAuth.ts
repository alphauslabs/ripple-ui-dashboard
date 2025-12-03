/**
 * @deprecated Use the useAuth hook from the AuthProvider context instead.
 * This hook is kept for backward compatibility but should be replaced.
 *
 * Import: import { useAuth } from 'path/to/context/AuthProvider';
 */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.warn(
      'useAuth from lib/hooks is deprecated. Use AuthProvider context instead.'
    );

    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];

    if (token) {
      navigate('/'); // Redirect if token exists
    } else {
      setLoading(false); // Allow render if no token
    }
  }, [navigate]);

  return loading;
}

export { useAuth };
