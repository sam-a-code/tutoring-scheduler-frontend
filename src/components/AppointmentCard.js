import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'


function AppointmentCard({ date, time, notes, location, tutor, student, id, appointment, removeAppointment, updateAppointment }) {
    const [expand, setExpand] = useState(false)
    const [updatedDate, setUpdatedDate] = useState(date)
    const [updatedTime, setUpdatedTime] = useState(time)
    const [updatedNotes, setUpdatedNotes] = useState(notes)
    const [tutorId, setTutorId] = useState(appointment.tutor_id)
    const [studentId, setStudentId] = useState(appointment.student_id)
    const [updatedLocation, setUpdatedLocation] = useState(location)
    const history = useHistory()

    function expandForm() {
        setExpand(prev => !prev)
    }

    function handleAppointmentDelete() {
      fetch(`http://localhost:9292/appointments/${id}`, {
        method: "DELETE",
      });
      removeAppointment(id);
    }

    function handleSubmit(e) {
        e.preventDefault();
        history.push('/appointments')
        fetch(`http://localhost:9292/appointments/${id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json"},
          body: JSON.stringify({
            date: updatedDate,
            time: updatedTime,
            notes: updatedNotes,
            location: updatedLocation,
            student_id: parseInt(studentId),
            tutor_id: parseInt(tutorId),
          })
        })
        .then(r => r.json())
        .then(data => updateAppointment(data[0]))
      }

    return (

        <div className='card'>
            <h3>{appointment.student_id}{appointment.tutor_id}</h3>
            <h2>{date}, {time}</h2>
            <h3>Tutor: {tutor?.first_name} {tutor?.last_name}</h3>
            <h3>Student: {student?.first_name} {student?.last_name}</h3>
            <h3>Meeting Location: {location}</h3>
            <h3>Notes: {notes}</h3>
            <button className='button' onClick={expandForm}>Click to change or cancel appointment.</button>
            <br></br>

            {expand &&
                <div onSubmit={handleSubmit}>
                <h4>Make a change to your appointment</h4>
                <form className="form-input">
                  <input className="form-input" type="text" name="date" placeholder="Date" value={updatedDate} onChange={(e) => setUpdatedDate(e.target.value)}/>
                  <br></br>
                  <input className="form-input" type="text" name="time" placeholder="Desired Time" value={updatedTime} onChange={(e) => setUpdatedTime(e.target.value)}/>
                  <br></br>
                  {/* <input className="form-input" type="text" name="tutor" placeholder="Tutor" value={tutorId} onChange={(e) => setTutorId(e.target.value.id)}/>
                  <br></br>
                  <input className="form-input" type="text" name="student" placeholder="Student" value={studentId} onChange={(e) => setStudentId(e.target.value.id)}/>
                  <br></br> */}
                  <input className="form-input" type="text" name="notes" placeholder="Notes for tutor" value={updatedNotes} onChange={(e) => setUpdatedNotes(e.target.value)}/>
                  <br></br>
                  <input className="form-input" type="text" name="location" placeholder="Location" value={updatedLocation} onChange={(e) => setUpdatedLocation(e.target.value)}/>
                  <br></br>
                  <br></br>
                  <button type="submit" className='button'>Submit appointment changes</button><br></br>
                    <button className='button' onClick={handleAppointmentDelete}> Cancel appointment</button>
                    </form>

                </div>}
        </div>
    )
}

export default AppointmentCard;
