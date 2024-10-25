import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Exit = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
};