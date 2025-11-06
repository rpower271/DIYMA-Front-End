import { useState } from "react";

function EditAccountForm({ user, onUpdate, onCancel }) {
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div>
      <div>
        <h2>Edit Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Phone number:</label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditAccountForm;
