import React from "react";
import { Link } from "react-router-dom";

function TutorCard({ tutor }) {
  const { first_name, last_name, location, subject } = tutor;

  return (
    <div className="card">
      <h2 className="tutor-name">
        {first_name} {last_name}
      </h2>
      <h2>Location: {location}</h2>
      <h3>Area of Expertise: {subject}</h3>
      <Link to="/newappointment">
        <button className="button">Click to set an appointment!</button>
      </Link>
      <br></br>
    </div>
  );
}

export default TutorCard;
