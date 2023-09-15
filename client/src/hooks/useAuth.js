// import jwtDecode from 'jwt-decode';
import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/AuthProvider';

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.user ? 'Logged In' : 'Logged Out'));
  console.log('Current Auth', auth);

  /* if (token) {
    const decoded = jwtDecode(token);
    const { email, id } = decoded;

    return { email, id };
  }
  return null; */
  return useContext(AuthContext);
};

export default useAuth;
