function AvatarCard({ user, onEditAccount }) {
  return (
    <div>
      {" "}
      <div>Avatar</div>
      <button onClick={onEditAccount}>Edit Account</button>
    </div>
  );
}

export default AvatarCard;
