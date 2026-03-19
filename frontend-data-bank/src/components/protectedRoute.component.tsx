import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import { useAuth } from '../hooks/useAuth.hook';
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React_Error_Type.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth_Invalid_Hook();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;