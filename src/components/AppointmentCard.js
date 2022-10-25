import React from 'react';

function AppointmentCard({date, time, notes, location, tutor_id, student_id}) {
    return (
        <div>
            <h1>{date}, {time}</h1>
            <h2>{notes}</h2>
            <h2>{location}</h2>
            <h2>{tutor_id}, {student_id}</h2>
            <a>Click to change or cancel appointment.</a>
            <br></br>
        </div>
    )
}

export default AppointmentCard;
