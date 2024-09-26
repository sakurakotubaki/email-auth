import { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export function useAuth() {
  const { user } = useContext(AuthContext);

  const signOut = () => {
    return firebaseSignOut(auth);
  };

  return {
    user,
    signOut,
  };
}