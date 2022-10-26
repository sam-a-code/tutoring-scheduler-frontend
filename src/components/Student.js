import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/students")
      .then((r) => r.json())
      .then((students) => setStudents(students));
  }, []);

  function removeStudent(id) {
    const removeStudentCard = students.filter((student) => student.id !== id);
    setStudents(removeStudentCard);
  }

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
