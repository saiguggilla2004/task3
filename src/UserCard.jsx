import React from "react";
import "./UserCard.css";

function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <div className="avatar">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
          alt="avatar"
        />
      </div>
      <div className="user-info">
        <h3>{name}</h3>
        <p>{email}</p>
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default UserCard;
