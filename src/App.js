import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import PrivateRoute from './hoc/PrivateRoute';
import { useSessionStorage } from './hooks';
import LoginContext from './context/loginDetailsContext';

const Login = lazy(() => import('./Pages/Login'));
const Accounts = lazy(() => import('./Pages/Accounts'));
const NewAccounts = lazy(() => import('./Pages/NewAccounts'));
const Transactions = lazy(() => import('./Pages/Transactions'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound'));

function App() {
  // using custom hooks to set the login details to session storage
  const [{ isLoggedIn, id }, setLoggedIn] = useSessionStorage({ isLoggedIn: false, id: '' }, 'isLoggedIn');

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter >
        <LoginContext.Provider value={{ id, isLoggedIn, setLoggedIn }}>
          <Switch>
            <Route exact path='/' render={(props) => <Login setLoggedIn={setLoggedIn} {...props} />} />
            <Route exact path='/login' render={(props) => <Login setLoggedIn={setLoggedIn} {...props} />} />
            <PrivateRoute exact isLoggedIn={isLoggedIn} showAddAccount path='/accounts' component={Accounts} />
            <PrivateRoute exact isLoggedIn={isLoggedIn} link='New Account' path='/newAccounts' component={NewAccounts} />
            <PrivateRoute exact isLoggedIn={isLoggedIn} link='Transactions' path='/transactions' component={Transactions} />
            <Route component={PageNotFound} />
          </Switch>
        </LoginContext.Provider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
