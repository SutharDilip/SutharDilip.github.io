import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import { Main } from './Pages/index';
import axios from 'axios';
import { Loading } from './Pages/Loading';


const Messages = (props) => {
  React.useEffect(() => {
    axios
    .get('http://localhost:8080/api/messages/list', {
      username: props.match.params.username,
      password: props.match.params.password,
    })
    .then((response) => {
      console.log(response.data);
    });
  });
  
  return (
    <div>
      <h1>Messages</h1>
      <p>USERNAME: {props.match.params.username}</p>
      <p>PASSWORD: {props.match.params.password}</p>
    </div>
  );
};


function App() {
  const [state, setstate] = React.useState('')
  
  setTimeout(() => {
    setstate("dilip")
  }, 500);
  return (
    <>
        {state === 'dilip' ?
      <Router>
          <Nav />
        <Switch>
          <Route
            exact
            path='/messages/:username/:password'
            component={Messages}
            />
          <Route exact path='/' component={Main} />
        </Switch>
      </Router>
          : 
          <Loading/>
          }
    </>
  );
}

export default App;
