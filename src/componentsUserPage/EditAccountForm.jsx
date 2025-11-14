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
    <div className="fixed inset-0 bg-slate-900 bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div className="bg-stone-300  shadow-md rounded-xl border-2 border-black w-full max-w-md">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Edit Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-slate-900">
                Username:
              </label>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="bg-white block w-full border-2 border-black px-3 py-2 focus:outline-none"
                style={{ maxWidth: "100%" }}
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
                className="bg-white block w-full border-2 border-black px-3 py-2 focus:outline-none"
                style={{ maxWidth: "100%" }}
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
                className="bg-white block w-full border-2 border-black px-3 py-2 focus:outline-none"
                style={{ maxWidth: "100%" }}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onCancel}
                className="bg-blue-500 flex-1 border-2 shadow-md rounded-xl border-blue-500 text-white px-6 py-2 hover:bg-black hover:text-white transition font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 border-2 shadow-md rounded-xl border-blue-500 bg-blue-500 text-white px-6 py-2 hover:bg-black hover:text-white transition font-semibold"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAccountForm;
