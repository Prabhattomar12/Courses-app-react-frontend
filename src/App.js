import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CardsList from './components/CardsList';
import Header from './components/Header';
import Course from './components/Course';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='app_body'>
          <Switch>
            <Route path='/course/:courseId'>
              <Course />
            </Route>
            <Route path='/'>
              <div className='cardsList_container'>
                <CardsList />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
