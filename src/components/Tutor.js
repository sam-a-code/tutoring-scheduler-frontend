import React, {useState, useEffect} from "react";
import TutorCard from "./TutorCard";

function Tutor () {
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/tutors')
    .then((r) => r.json())
    .then((tutors) => setTutors(tutors))
    }, [])

  const tutorList = tutors.map((tutor) => {
    return <TutorCard key={tutor.id} tutor={tutor} />;
  });

  return (
    <div>
      <h1 className="section-header">Tutors</h1>
      <h3 className="section-subheader">Click each tutor's name to see their subject expertise +</h3>
      <h3 className="section-subheader">click the button to set an appointment!</h3>
    <ul>
      {tutorList}
    </ul>
    </div>
  )
}

export default Tutor;
