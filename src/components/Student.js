import React from "react";
import StudentCard from "./StudentCard";

function Student({ students, removeStudent }) {
  const studentList = students.map((student) => {
    return <StudentCard
    key={student.id}
    id={student.id}
    first_name={student.first_name}
    last_name={student.last_name}
    age={student.age}
    location={student.location}
    subject={student.subject}
    removeStudent={removeStudent}
    />;
  });

  return (
    <div>
      <h1 className="section-header">Students</h1>
      <ul>{studentList}</ul>
    </div>
  );
}

export default Student;
