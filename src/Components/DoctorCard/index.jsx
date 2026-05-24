import React from "react";
import "./DoctorCard.css";

export const DoctorCard = () => {
  return (
    <div className="single-card">
      <img src="doctor-img.avif" alt="" />
      <h2>Ahmed Khan</h2>
      <p className="card-speciality">Stomach Specialist</p>
      <p className="card-tag-line">Your health is our wealth</p>
      <div style={{ textAlign: "center" }}>
        <button>+Book Appointment</button>
      </div>
    </div>
  );
};
