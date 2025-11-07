import React from "react";

function ProfileInfoCard({ user, projectsAdded }) {
  return (
    <div>
      <h3>Profile Information</h3>
      <p>
        <strong>Username:</strong>
        {user.username}
      </p>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
      <p>
        <strong>Phone number:</strong>
        {user.phoneNumber}
      </p>
      <p>
        <strong>Number of projects</strong>
        {projectsAdded}
      </p>
    </div>
  );
}

export default ProfileInfoCard;
