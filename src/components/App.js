import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import AppointmentParent from './AppointmentParent';
import Student from './Student';
import Tutor from './Tutor';
import AppointmentForm from './AppointmentForm';
import {Switch, Route} from 'react-router-dom';

function App() {


  return (
    <div>
      <header>
        <NavBar/>
        <h1>Tutor!</h1>
        <br></br>
        <Switch>
          <Route exact path="/tutors">
            <Tutor />
          </Route>
          <Route exact path="/appointments">
            <AppointmentParent />
          </Route>
          <Route exact path="/students">
            <Student/>
          </Route>
          <Route exact path="/newappointment">
            <AppointmentForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>Uh oh! Looks like you're not in class and don't have a hall pass. Make an appointment with one of our tutors to get back on track! </h1>
          </Route>
          </Switch>
      </header>
    </div>
  );
}

export default App;
