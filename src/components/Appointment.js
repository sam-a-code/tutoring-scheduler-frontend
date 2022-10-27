import React from "react";
import AppointmentCard from "./AppointmentCard";

function Appointment({
  appointments,
  students,
  tutors,
  removeAppointment,
  updateAppointment,
}) {
  const appointmentList = appointments.map((appointment) => {
    return (
      <AppointmentCard
        key={appointment.id}
        id={appointment.id}
        date={appointment.date}
        time={appointment.time}
        notes={appointment.notes}
        location={appointment.location}
        tutor={appointment.tutor}
        student={appointment.student}
        tutors={tutors}
        students={students}
        appointment={appointment}
        removeAppointment={removeAppointment}
        updateAppointment={updateAppointment}
      />
    );
  });

  return (
    <div>
      <h1 className="section-header">Appointments</h1>
      <ul>{appointmentList}</ul>
    </div>
  );
}

export default Appointment;
