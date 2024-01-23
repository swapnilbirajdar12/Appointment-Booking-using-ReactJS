// src/AppointmentList.js
import React from 'react';

function AppointmentList({ appointments, onDelete, onUpdate }) {
  const handleUpdateClick = (appointment) => {
    onUpdate(appointment);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td>{appointment.name}</td>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>
              <button onClick={() => handleUpdateClick(appointment)}>Update</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AppointmentList;
