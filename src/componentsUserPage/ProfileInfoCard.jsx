import React from "react";

function ProfileInfoCard({ user, projectsAdded }) {
  return (
    <div className="border-2 border-black p-6 flex-1">
      <h3 className="text-xl font-bold mb-4">Profile info</h3>
      <p className="mb-2">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="mb-2">
        <strong>Phone number:</strong> {user.phoneNumber}
      </p>
      <p className="mb-2">
        <strong>Project count:</strong> {projectsAdded}
      </p>
    </div>
  );
}

export default ProfileInfoCard;
