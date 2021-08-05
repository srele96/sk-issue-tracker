import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { userStatusSelector } from './redux/slice';
import { Header } from './components/Header';
import { Public } from './components/Routes';
import { auth, status } from './util';
import { useAuth } from './hooks';
import { routes } from './routes';
import { Home } from './pages';

const App = () => {
  const userStatus = useSelector(userStatusSelector);

  // Call useAuth in top level component to monitor
  // if user is signed in or signed out.
  // This makes sure any component below is in sync.
  useAuth(auth);

  if (userStatus === status.pending) return <div>Loading...</div>;

  return (
    <Router>
      <Header />

      <Switch>
        <Public path={routes.home} component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
