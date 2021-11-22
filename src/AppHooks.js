import './App.css';
import AppBar from './AppBar';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView'
import Contacts from './views/ContactsView'
import Container from './Container/Container'


import Filter from './Filter/FilterHooks';
import { Suspense } from 'react';

function App() {
//   return (
//     <>
//       <div className="App">
//         <h1>Phonebook</h1>
//         <AppBar />
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </div>
//     </>
//   );
// }

   return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
       
    </Container>
  );

}

export default App;
