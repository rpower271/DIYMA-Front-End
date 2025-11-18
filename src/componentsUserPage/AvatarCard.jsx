import { useState } from "react";

export default function AvatarCard({ user, onEditAccount, onAvatarChange }) {
  const [isHovering, setIsHovering] = useState(false);

  const hasUser = Boolean(user);
  const avatarSrc = user?.avatar || null;

  function handleImageChange(e) {
    if (!hasUser || typeof onAvatarChange !== "function") return;

    const file = e.target.files && e.target.files[0];
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
        className={`relative w-40 h-40 rounded-full shadow-md border-2 border-slate-800 flex items-center justify-center text-lg font-semibold bg-white overflow-hidden ${
          hasUser ? "cursor-pointer" : "cursor-default"
        }`}
        onMouseEnter={() => hasUser && setIsHovering(true)}
        onMouseLeave={() => hasUser && setIsHovering(false)}
      >
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-slate-600">
            {hasUser ? "Avatar" : "Loading..."}
          </span>
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
          disabled={!hasUser}
          className={`absolute inset-0 w-full h-full opacity-0 ${
            hasUser ? "cursor-pointer" : "pointer-events-none"
          }`}
        />
      </div>

      <button
        onClick={() => hasUser && onEditAccount && onEditAccount()}
        disabled={!hasUser}
        className={`bg-blue-500 border-2 shadow-md rounded-xl border-blue-500 text-amber-50 px-6 py-2 transition ${
          hasUser
            ? "hover:bg-slate-800 hover:text-white"
            : "opacity-60 cursor-not-allowed"
        }`}
      >
        Edit account
      </button>
    </div>
  );
}
