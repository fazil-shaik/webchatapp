// // import react from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Chat from './components/Chat';
// import Login from './components/Login';
// import Signup from './components/Signup';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/chat" component={Chat} />
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;


// frontend/src/pages/Home.js
import  { useState } from 'react';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Chat from '../components/Chat';

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div>
      <h1>Real-Time Chat</h1>
      {!token ? (
        <>
          <SignUp />
          <Login onLogin={(token) => setToken(token)} />
        </>
      ) : (
        <Chat token={token} />
      )}
    </div>
  );
};

export default Home;
