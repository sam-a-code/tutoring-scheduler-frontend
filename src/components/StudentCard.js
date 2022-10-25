import React from 'react';

function StudentCard({id, first_name, last_name, age, location, subject, removeStudent}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/students${id}`, {
          method: "DELETE",
        });
        removeStudent(id);
      }
    return (
        <div>
            <h1>{first_name} {last_name}</h1>
            <h2>{age}</h2>
            <h2>{location}</h2>
            <h2>{subject}</h2>
            <button onClick={handleDeleteClick}>Click to remove a student from the tutoring list!</button>
            <br></br>
        </div>
    )
}

export default StudentCard;
