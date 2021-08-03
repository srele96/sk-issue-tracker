import { useSelector } from 'react-redux';
import { Auth } from './components/Auth';
import { SignOut } from './components/SignOut';
import { VisibleTo } from './components/VisibleTo';
import { auth, status } from './util';
import { useAuth } from './hooks';
import { userStatusSelector } from './redux/slice';

const App = () => {
  const userStatus = useSelector(userStatusSelector);
  // Call useAuth in top level component to monitor
  // if user is signed in or signed out.
  // This makes sure any component below is in sync.
  useAuth(auth);

  if (userStatus === status.pending) return <div>Loading...</div>;

  return (
    <div>
      {status === status.error && <div>Sign In failed. Try again.</div>}

      <VisibleTo signedIn>
        <div>Dashboard</div>
        <SignOut auth={auth} />
      </VisibleTo>

      <VisibleTo signedOut>
        <Auth />
      </VisibleTo>
    </div>
  );
};

export default App;
