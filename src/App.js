// src/App.js
import React, { useState } from 'react';
import './App.css';
import { appointments } from './data';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';

function App() {
  const [appointmentData, setAppointmentData] = useState(appointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const addAppointment = (newAppointment) => {
    setAppointmentData([...appointmentData, newAppointment]);
  };

  const deleteAppointment = (index) => {
    const updatedAppointments = [...appointmentData];
    updatedAppointments.splice(index, 1);
    setAppointmentData(updatedAppointments);
  };

  const updateAppointment = (updatedData) => {
    setAppointmentData((prevAppointments) => {
      return prevAppointments.map((appointment) =>
        appointment === selectedAppointment ? { ...appointment, ...updatedData } : appointment
      );
    });
    setSelectedAppointment(null);
  };

  return (
    <div className="App">
      <h1>Appointment Booking App</h1>
      <div className="container">
        <div className="left">
          <h2>{selectedAppointment ? 'Update Appointment' : 'Book an Appointment'}</h2>
          <AppointmentForm
            onSubmit={selectedAppointment ? updateAppointment : addAppointment}
            onUpdateData={selectedAppointment}
          />
        </div>
        <div className="right">
          <h2>Appointment List</h2>
          <AppointmentList
            appointments={appointmentData}
            onDelete={deleteAppointment}
            onUpdate={(appointment) => setSelectedAppointment(appointment)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
