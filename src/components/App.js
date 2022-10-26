import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Appointment from './Appointment';
import Student from './Student';
import Tutor from './Tutor';
import AppointmentForm from './AppointmentForm';
import { Switch, Route } from 'react-router-dom';

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

  function updateAppointment(updatedAppointment){
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === updatedAppointment.id) {
        return updatedAppointment;
      }
      else {
        return appointment;
      }
    })
    setAppointments(updatedAppointments);
    console.log(updatedAppointments);
  }

  function removeAppointment(id) {
    const removeSelectedAppointment = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(removeSelectedAppointment);
  }

      // student state
      const [students, setStudents] = useState([]);

      useEffect(() => {
        fetch("http://localhost:9292/students")
          .then((r) => r.json())
          .then((students) => setStudents(students));
      }, []);

      function removeStudent(id) {
        const removeStudentCard = students.filter((student) => student.id !== id);
        setStudents(removeStudentCard);
      }

      //tutor state
      const [tutors, setTutors] = useState([])

      useEffect(() => {
        fetch('http://localhost:9292/tutors')
        .then((r) => r.json())
        .then((tutors) => setTutors(tutors))
        }, [])

  return (
    <div className='paper'>
      <header>
        <NavBar/>
        <br></br>
        <h1 className='header'>Tutors + Appointments</h1>
        <br></br>
        <Switch>
          <Route exact path="/tutors">
            <Tutor tutors={tutors} setTutors={setTutors}/>
          </Route>
          <Route exact path="/appointments">
            <Appointment appointments={appointments} updateAppointment={updateAppointment} addAppointment={addAppointment} tutors={tutors} students={students} removeAppointment={removeAppointment}/>
          </Route>
          <Route exact path="/students">
            <Student removeStudent={removeStudent} students={students} setStudents={setStudents}/>
          </Route>
          <Route exact path="/newappointment">
            <AppointmentForm appointments={appointments} setAppointments={setAppointments} addAppointment={addAppointment} tutors={tutors} students={students}/>
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
