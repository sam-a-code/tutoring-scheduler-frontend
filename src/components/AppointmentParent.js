import React, { useEffect, useState} from "react";
import AppointmentForm from "./AppointmentForm";
import Appointment from "./Appointment"

function AppointmentParent() {

const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/appointments')
    .then((r) => r.json())
    .then((appointments) => setAppointments(appointments))
    }, [])

    function addAppointment(newAppointment) {
        setAppointments(appointments => [...appointments, newAppointment])
      }

    return (
        <div>
    <AppointmentForm addAppointment={addAppointment}/>
    <Appointment appointments={appointments} setAppointments={setAppointments}/>
    </div>
    )

}
export default AppointmentParent
