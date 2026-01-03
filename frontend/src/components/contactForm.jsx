import { useState } from "react";
import { api } from "../api/api";

const ContactForm = ({ refresh, setError, setLoading }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      err.email = "Invalid email";
    if (!form.phone) err.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone)) err.phone = "Phone must be exactly 10 digits";
    if (!form.message) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setSuccess("");
      setSubmitting(true);
      if (setLoading) setLoading(true);
      if (setError) setError("");
      await api.post("/contacts", form);
      setForm({ name: "", email: "", phone: "", message: "" });
      setSuccess("Contact added successfully");
      await refresh();
    } catch (err) {
      const msg =
        err?.response?.data?.message || err.message || "Failed to submit";
      if (setError) setError(msg);
    } finally {
      setSubmitting(false);
      if (setLoading) setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-3">
      <h2 className="text-lg font-medium">Add Contact</h2>

      <div>
        <input
          className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <input
          className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
      </div>

      <div>
        <input
          type="tel"
          maxLength="10"
          pattern="\d{10}"
          className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white"
          placeholder="Phone (10 digits)"
          value={form.phone}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
            setForm({ ...form, phone: val });
          }}
        />
        {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
      </div>

      <div>
        <textarea
          className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white resize-vertical"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md shadow"
          disabled={!form.name || form.phone.length !== 10 || submitting}
        >
          {submitting ? "Submitting…" : "Submit"}
        </button>
        {success && <div className="text-sm text-green-600">{success}</div>}
      </div>
    </form>
  );
};

export default ContactForm;
