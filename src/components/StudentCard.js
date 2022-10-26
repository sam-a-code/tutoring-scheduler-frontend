import React from 'react';

function StudentCard({id, first_name, last_name, age, location, subject, removeStudent}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/students/${id}`, {
          method: "DELETE",
        });
        removeStudent(id);
      }
    return (
        <div className='card'>
            <h2>{first_name} {last_name}</h2>
            <h2>Age: {age}</h2>
            <h2>Location: {location}</h2>
            <h3>Field of Study: {subject}</h3>
            <button className='button' onClick={handleDeleteClick}>Click to remove a student from the tutoring list!</button>
            <br></br>
        </div>
    )
}

export default StudentCard;
