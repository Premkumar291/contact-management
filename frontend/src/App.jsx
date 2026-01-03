import { useEffect, useState } from "react";
import { api } from "./api/api";
import logo from "./assets/logo.png";
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await api.get("/contacts");
      setContacts(res.data);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    try {
      setLoading(true);
      setError("");
      await api.delete(`/contacts/${id}`);
      await fetchContacts();
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Failed to delete");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen">
      <header className="max-w-5xl mx-auto mb-6 flex items-center gap-4">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <div>
          <h1 className="text-lg font-semibold">Contact Manager</h1>
          <p className="text-sm text-gray-500">Manage your contacts with ease</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        {error && <div className="mb-4 p-4 rounded bg-red-50 text-red-700">{error}</div>}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">
          <ContactForm refresh={fetchContacts} setError={setError} setLoading={setLoading} />

          <div className="card overflow-auto">
            <ContactList contacts={contacts} onDelete={deleteContact} loading={loading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
