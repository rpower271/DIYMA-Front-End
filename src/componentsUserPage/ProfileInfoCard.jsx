import React from "react";

function ProfileInfoCard({ user, projectsAdded }) {
  return (
    <div className="border-2 border-slate-800 bg-white p-6 flex-1">
      <h3 className="text-xl font-bold mb-4 text-slate-800">Profile info</h3>
      <p className="mb-2 text-slate-900">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="mb-2 text-slate-900">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="mb-2 text-slate-900">
        <strong>Phone number:</strong> {user.phoneNumber}
      </p>
      <p className="mb-2 text-slate-900">
        <strong>Project count:</strong> {projectsAdded}
      </p>
    </div>
  );
}

export default ProfileInfoCard;
