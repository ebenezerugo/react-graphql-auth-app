import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  {RootState}  from '../store/store';

export const ProtectedRoute: React.FC<any> = ({ children }) => {

    const isLoggedIn = useSelector((state: RootState) => {return state.auth.isLoggedIn});
    const navigate = useNavigate();

    useEffect(() => {
        
        if (!isLoggedIn) {
            // user is not authenticated
            navigate('/login');
        }
    
      }, [isLoggedIn, navigate]);

      if (!isLoggedIn) {
        return null;
      }
    
      return <>{children}</>;

};