import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Table from "../ui/Table";

const UsersTable = ({ users, loading, onDelete, onEdit }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {}, [search]);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()),
  );

  const columns = [
    {
      key: "name",
      title: "Name",
    },
    {
      key: "email",
      title: "Email",
    },
    {
      key: "role",
      title: "Role",
      render: (row) => (
        <span className="capitalize text-text-secondary">{row.role}</span>
      ),
    },
    {
      key: "action",
      title: "",
      render: (row) => (
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => onEdit(row)}
            className="p-2 rounded hover:bg-card"
          >
            <Pencil className="h-4 w-4" />
          </button>

          <button
            onClick={() => onDelete(row.id)}
            className="p-2 rounded hover:bg-card"
          >
            <Trash2 className="h-4 w-4 hover:text-danger" />
          </button>
        </div>
      ),
    },
  ];

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="bg-card border border-border rounded-xl p-4 space-y-4">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 border border-border rounded-lg bg-background text-sm w-full sm:w-64"
      />

      <Table columns={columns} data={filtered} />
    </div>
  );
};

export default UsersTable;
