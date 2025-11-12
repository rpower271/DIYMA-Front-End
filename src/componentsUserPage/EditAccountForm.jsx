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
    <div className="fixed inset-0 bg-slate-900 bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-white border-2 border-slate-800 p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Edit Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-slate-900">
              Username:
            </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border-2 border-slate-800 p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-slate-900">
              Email:
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-slate-800 p-2"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-slate-900">
              Phone number:
            </label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border-2 border-slate-800 p-2"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 border-2 border-slate-800 text-slate-800 p-2 hover:bg-slate-800 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 border-2 border-slate-800 text-slate-800 p-2 font-semibold hover:bg-slate-800 hover:text-white transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditAccountForm;
