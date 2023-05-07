import { useState } from 'react';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const authenticate = () => setIsAuthenticated(true);
  const signout = () => setIsAuthenticated(false);

  return { isAuthenticated, authenticate, signout };
};