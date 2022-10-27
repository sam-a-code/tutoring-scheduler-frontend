import React from "react";
import TutorCard from "./TutorCard";

function Tutor ({ tutors }) {
  const tutorList = tutors.map((tutor) => {
    return <TutorCard key={tutor.id} tutor={tutor} />;
  });

  return (
    <div>
      <h1 className="section-header">Tutors</h1>
      <h3 className="section-subheader">See our available tutors below!</h3>
      <h3 className="section-subheader">Click the button under each tutor's name to set an appointment</h3>
      <ul>
        {tutorList}
      </ul>
    </div>
  )
}

export default Tutor;
