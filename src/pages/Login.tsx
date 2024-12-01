import React from 'react';
import {useNavigate} from 'react-router-dom';
import {LoginForm} from '@/components/login-form';
import {loginUser} from '@/lib/auth';
import {toast} from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const user = loginUser(email, password); 
    if (user) {
      navigate(`/`);
    } else {
      toast({
        variant: "destructive",
        title: 'Invalid credentials',
        description: "Please check your email and password",
      });
    }
  };

  return (
    <div className='bg-white flex justify-center items-center h-screen w-full'>
      <LoginForm onLogin={handleLogin} />
      <Toaster />
    </div>
  );
};

export default Login;
