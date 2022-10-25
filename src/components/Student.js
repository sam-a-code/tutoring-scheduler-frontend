import React, { useState, useEffect } from "react";
import StudentCard from "./StudentCard";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/students")
      .then((r) => r.json())
      .then((students) => setStudents(students));
  }, []);

  const studentList = students.map((student) => {
    return <StudentCard key={student.id} />;
  });

  return (
    <div>
      <h2>Students</h2>
      <ul>{studentList}</ul>
    </div>
  );
}

export default Student;
