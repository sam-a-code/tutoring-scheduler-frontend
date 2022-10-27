import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AppointmentForm({ addAppointment, tutors, students }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tutorName, setTutorName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [notes, setNotes] = useState("");
  const [location, setLocation] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (tutorName === "") {
      window.alert("Please select a tutor");
    } else if (studentName === "") {
      window.alert("Please select a student");
    } else {
      history.push("/appointments");
      fetch("http://localhost:9292/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date,
          time: time,
          notes: notes,
          tutor_id: parseInt(tutorName),
          location: location,
          student_id: parseInt(studentName),
        }),
      })
        .then((r) => r.json())
        .then((data) => addAppointment(data[0]));
    }
  }

  return (
    <div onSubmit={handleSubmit} className="form-input">
      <h2 className="form-name">Schedule a new tutoring session!</h2>
      <form className="form-new">
        <label>Date: </label>
        <input
          className="form-input"
          type="text"
          name="date"
          placeholder="Desired Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br></br>
        <label>Time: </label>
        <input
          className="form-input"
          type="text"
          name="time"
          placeholder="Desired Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br></br>
        <label>Tutor: </label>
        <select
          onChange={(e) => setTutorName(e.target.value)}
          className="form-input"
          value={tutorName}
        >
          <option value="">Select a tutor</option>
          {tutors.map((tutor) => (
            <option key={tutor.first_name} value={tutor.id}>
              {tutor.first_name} {tutor.last_name}
            </option>
          ))}
        </select>
        <br></br>
        <label>Student: </label>
        <select
          onChange={(e) => setStudentName(e.target.value)}
          className="form-input"
          value={studentName}
        >
          <option value="">Select a student</option>
          {students.map((student) => (
            <option key={student.first_name} value={student.id}>
              {student.first_name} {student.last_name}
            </option>
          ))}
        </select>
        <br></br>
        <label>Location: </label>
        <input
          className="form-input"
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br></br>
        <label>Notes: </label>
        <textarea
          className="form-input"
          type="text"
          name="notes"
          placeholder="Notes for tutor"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit" className="button">
          Submit Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
