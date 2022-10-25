import React, { useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'


function AppointmentForm({addAppointment}) {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [notes, setNotes] = useState("")
  const [tutor, setTutor] = useState("")
  const [location, setLocation] = useState("")
  const history = useHistory()


  function handleSubmit(e) {
    e.preventDefault();
    history.push('/appointments')
    fetch('http://localhost:9292/appointments', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify({
        date: date,
        time: time,
        notes: notes,
        tutor: tutor,
        location: location
      })
    })
    let newAppointment = {
      date: date,
      time: time,
      notes: notes,
      tutor: tutor,
      location: location
    }
    addAppointment(newAppointment)
  }

return (
    <div onSubmit={handleSubmit}>
      <h2 >Schedule a new tutoring session!</h2>
      <form >
        <input type="text" name="date" placeholder="Desired Date" value={date} onChange={(e) => setDate(e.target.value)}/>
        <br></br>
        <input type="text" name="time" placeholder="Desired Time" value={time} onChange={(e) => setTime(e.target.value)}/>
        <br></br>
        <input type="text" name="notes" placeholder="Notes for tutor" value={notes} onChange={(e) => setNotes(e.target.value)}/>
        <br></br>
        <input type="text" name="tutor" placeholder="Tutor" value={tutor} onChange={(e) => setTutor(e.target.value)}/>
        <br></br>
        <input type="text" name="location" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        <br></br>

        <br></br>
        <button type="submit">Submit appointment request</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
