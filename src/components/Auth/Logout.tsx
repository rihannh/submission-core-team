import React from 'react';
import {useNavigate} from 'react-router-dom';
import {logoutUser} from '@/lib/auth';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className='btn btn-secondary'>
      Logout
    </button>
  );
};

export default Logout;
