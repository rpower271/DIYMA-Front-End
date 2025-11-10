function AvatarCard({ user, onEditAccount }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-40 h-40 rounded-full border-2 border-black flex items-center justify-center text-lg font-semibold">Avatar</div>
      <button onClick={onEditAccount} className="border-2 border-black px-6 py-2">Edit Account</button>
    </div>
  );
}

export default AvatarCard;
