import React from 'react';

function StudentCard({}) {
    return (
        <div>
            <h1>{}</h1>
            <h2>{}</h2>
            <a href={url} target="_blank">Click to edit or remove a student from the tutoring list!</a>
            <br></br>
        </div>
    )
}

export default StudentCard;
