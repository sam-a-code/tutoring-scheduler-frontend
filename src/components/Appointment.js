import React, {useState, useEffect} from "react";
import AppointmentCard from "./AppointmentCard";

function Appointment () {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/appointments')
    .then((r) => r.json())
    .then((appointments) => setAppointments(appointments))
    }, [])

  const appointmentList = appointments.map((appointment) => {
    return (
      <AppointmentCard
      key={appointment.id}
      date={appointment.date}
      time={appointment.time}
      notes={appointment.notes}
      location={appointment.location}
      tutor_id={appointment.tutor_id}
      student_id={appointment.student_id}
        />
    ) })

  return (
    <div>
      <h2>Appointments</h2>
    <ul>
      {appointmentList}
    </ul>
    </div>
  )
}

export default Appointment;
