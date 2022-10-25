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
    return (
      <TutorCard
      key={tutor.id}
        />
    ) })

  return (
    <div>
      <h2>Tutors</h2>
    <ul>
      {tutorList}
    </ul>
    </div>
  )
}

export default Tutor;
