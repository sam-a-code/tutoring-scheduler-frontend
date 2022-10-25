import React from 'react';

function StudentCard({first_name, last_name, age, location, subject}) {
    return (
        <div>
            <h1>{first_name} {last_name}</h1>
            <h2>{age}</h2>
            <h2>{location}</h2>
            <h2>{subject}</h2>
            <a>Click to edit or remove a student from the tutoring list!</a>
            <br></br>
        </div>
    )
}

export default StudentCard;
