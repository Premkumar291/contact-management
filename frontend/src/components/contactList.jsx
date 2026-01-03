import React from "react";

const ContactList = ({ contacts, onDelete, loading }) => {
  if (loading) return <div className="p-4 text-center text-gray-500">Loading contacts…</div>;
  if (!contacts || contacts.length === 0)
    return <div className="p-4 text-center text-gray-500">No contacts yet — add one using the form.</div>;

  return (
    <div className="min-w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="hidden sm:table-header-group">
          <tr className="text-left text-sm text-gray-700">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {contacts.map((c) => (
            <tr key={c._id} className="sm:table-row block sm:table-row">
              <td className="px-4 py-3" data-label="Name">
                <div className="font-medium">{c.name}</div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600" data-label="Email">
                {c.email || "—"}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600" data-label="Phone">
                {c.phone}
              </td>
              <td className="px-4 py-3" data-label="Action">
                <button
                  onClick={() => onDelete(c._id)}
                  title="Delete contact"
                  className="text-red-600 hover:bg-red-50 rounded-md p-2"
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
