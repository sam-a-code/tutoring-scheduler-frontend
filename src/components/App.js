import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Appointment from './Appointment';
import Student from './Student';
import Tutor from './Tutor';
import AppointmentForm from './AppointmentForm';
import {Switch, Route} from 'react-router-dom';

function App() {
  // appointments state
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/appointments')
    .then((r) => r.json())
    .then((appointments) => setAppointments(appointments))
    }, [])

  function addAppointment(newAppointment) {
    setAppointments(appointments => [...appointments, newAppointment])
    }
    
      // need to replace this with id stuff
      // function updateAppointments(updatedAppointment) {
      //   setAppointments(appointments => [...appointments, newAppointment])
      // }

  return (
    <div className='paper'>
      <header>
        <NavBar/>
        <br></br>
        <h1 className='header'>Tutors + Appointments</h1>
        <br></br>
        <Switch>
          <Route exact path="/tutors">
            <Tutor />
          </Route>
          <Route exact path="/appointments">
            <Appointment appointments={appointments} setAppointments={setAppointments} addAppointment={addAppointment}/>
          </Route>
          <Route exact path="/students">
            <Student/>
          </Route>
          <Route exact path="/newappointment">
            <AppointmentForm appointments={appointments} setAppointments={setAppointments} addAppointment={addAppointment}/>
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
