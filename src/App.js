import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { userStatusSelector } from './redux/slice';
import { Header } from './components/Header';
import { Public, Authenticated } from './components/RouteComponents';
import { Loading } from './components/Loading';
import { auth, status } from './util';
import { useAuth } from './hooks';
import { routes } from './routes';
import { Home, Users, User, CreateProject } from './pages';

const App = () => {
  const userStatus = useSelector(userStatusSelector);

  // Call useAuth in top level component to monitor
  // if user is signed in or signed out.
  // This makes sure any component below is in sync.
  useAuth(auth);

  if (userStatus === status.idle || userStatus === status.pending) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />

      <Switch>
        <Authenticated
          path={routes.createProject}
          redirectPath="/"
          component={CreateProject}
        />
        <Public path={routes.user} component={User} />
        <Public path={routes.users} component={Users} />
        <Public exact path={routes.home} component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
