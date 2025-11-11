function AvatarCard({ user, onEditAccount }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-40 h-40 rounded-full border-2 border-slate-800 flex items-center justify-center text-lg font-semibold bg-white">
        Avatar
      </div>
      <button
        onClick={onEditAccount}
        className="border-2 border-slate-800 text-slate-800 px-6 py-2 hover:bg-slate-800 hover:text-white transition"
      >
        Edit Account
      </button>
    </div>
  );
}

export default AvatarCard;
