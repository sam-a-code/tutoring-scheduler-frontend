import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'


function AppointmentCard({date, time, notes, location, tutor, student, id}) {
    const [expand, setExpand] = useState(false)
    const [newDate, setNewDate] = useState("")
    const [newTime, setNewTime] = useState("")
    const [newNotes, setNewNotes] = useState("")
    const [newTutor, setNewTutor] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const history = useHistory()


    function expandForm() {
        setExpand(prev => !prev)
    }

    function handleSubmit(e) {
        e.preventDefault();
        history.push('/appointments')
        fetch('http://localhost:9292/appointments${:id}', {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json"},
          body: JSON.stringify({
            date: newDate,
            time: newTime,
            notes: newNotes,
            tutor: newTutor,
            location: newLocation
          })
        })
        // let updatedAppointment = {
        //   date: date,
        //   time: time,
        //   notes: notes,
        //   tutor: tutor,
        //   location: location
        // }
        // updateAppointments(updatedAppointment)
      }

    return (
        <div className='card'>
            <h2>{date}, {time}</h2>
            <h3>Tutor: {tutor.first_name} {tutor.last_name}</h3>
            <h3>Student: {student.first_name} {student.last_name}</h3>
            <h3>Meeting Location: {location}</h3>
            <h3>Notes: {notes}</h3>
            <button className='button' onClick={expandForm}>Click to change or cancel appointment.</button>
            <br></br>

            {expand &&
                <div onSubmit={handleSubmit}>
                <h2>Make a change to your appointment</h2>
                <form >
                    <input type="text" name="date" placeholder="Desired Date" value={newDate} onChange={(e) => setNewDate(e.target.value)}/>
                    <br></br>
                    <input type="text" name="time" placeholder="Desired Time" value={newTime} onChange={(e) => setNewTime(e.target.value)}/>
                    <br></br>
                    <input type="text" name="notes" placeholder="Notes for tutor" value={newNotes} onChange={(e) => setNewNotes(e.target.value)}/>
                    <br></br>
                    <input type="text" name="tutor" placeholder="Tutor" value={newTutor} onChange={(e) => setNewTutor(e.target.value)}/>
                    <br></br>
                    <input type="text" name="location" placeholder="Location" value={newLocation} onChange={(e) => setNewLocation(e.target.value)}/>
                    <br></br>

                    <br></br>
                    <button type="submit">Submit appointment changes</button><br></br>
                    <button > Cancel appointment</button>
                </form>
                </div>}
        </div>
    )
}

export default AppointmentCard;
