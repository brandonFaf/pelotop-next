import React, { useState, useEffect } from 'react';
import Data from '../components/Data';
import Login from '../components/Login';

const IndexPage = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setUser(userId);
    }
  }, []);
  if (!user) {
    return <Login setUser={setUser} />;
  }
  return <Data setUser={setUser} userId={user} />;
};

export default IndexPage;
