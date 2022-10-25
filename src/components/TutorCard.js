import React from "react";

function TutorCard({ tutor }) {
  const { first_name, last_name, location, subject } = tutor;

  return (
    <div>
      <h1>{first_name} {last_name}</h1>
      <h2>{location}</h2>
      <h3>{subject}</h3>
      <a>Click to set an appointment with this tutor!</a>
      <br></br>
    </div>
  );
}

export default TutorCard;
