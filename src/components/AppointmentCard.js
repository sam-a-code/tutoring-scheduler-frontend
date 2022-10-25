import React from 'react';

function AppointmentCard({date, time, notes, location, tutor, student}) {

    return (
        <div>
            <h1>{date}, {time}</h1>
            <h2>Tutor: {tutor.first_name} {tutor.last_name}</h2>
            <h2>Student: {student.first_name} {student.last_name}</h2>
            <h3>Meeting Location: {location}</h3>
            <h3>Notes: {notes}</h3>
            <a>Click to change or cancel appointment.</a>
            <br></br>
        </div>
    )
}

export default AppointmentCard;
