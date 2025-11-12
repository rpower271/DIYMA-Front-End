import { useState } from "react";

export default function AvatarCard({ user, onEditAccount, onAvatarChange }) {
  const [isHovering, setIsHovering] = useState(false);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      onAvatarChange(imageUrl);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative w-40 h-40 rounded-full border-2 border-slate-800 flex items-center justify-center text-lg font-semibold bg-white overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-slate-600">Avatar</span>
        )}

        {isHovering && (
          <div className="absolute inset-0 bg-slate-900 bg-opacity-60 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              Change Photo
            </span>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      <button
        onClick={onEditAccount}
        className="border-2 border-slate-800 text-slate-800 px-6 py-2 hover:bg-slate-800 hover:text-white transition"
      >
        Edit account
      </button>
    </div>
  );
}
