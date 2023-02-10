import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() { //all logic was moved to context, which now wraps App in the index.js file
  const ctx = useContext(AuthContext);
  
  return (
    <React.Fragment>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
    </React.Fragment> 
  );
}

export default App;
