import './App.css';
import AppBar from './AppBar';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ContactList from './ContactList/ContactListHooks';
import Container from './Container/Container';
import ContactsView from './views/ContactsView';

import Filter from './Filter/FilterHooks';
import { Suspense } from 'react';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  );
}

export default App;
