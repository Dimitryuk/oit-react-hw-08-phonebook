import './App.css';
import AppBar from './AppBar';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

import Container from './Container/Container';
import ContactsView from './views/ContactsView';

import Filter from './Filter/FilterHooks';
import { Suspense, useEffect, lazy } from 'react';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import { authOperations, authSelectors } from './redux/Auth';

export default function App() {
  //   return (
  //     <Container>
  //       <AppBar />

  //       <Switch>
  //         <Route exact path="/" component={HomeView} />
  //         <Route path="/register" component={RegisterView} />
  //         <Route path="/login" component={LoginView} />
  //         <Route path="/contacts" component={ContactsView} />
  //       </Switch>
  //     </Container>
  //   );
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
