import { useState, useEffect } from "react";
import UsersTable from "../components/users/UsersTable";
import AddUserModal from "../components/users/AddUserModal";
import Button from "../components/ui/Button";
import { Plus } from "lucide-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "John Doe", email: "john@gmail.com", role: "admin" },
        { id: 2, name: "Jane Smith", email: "jane@gmail.com", role: "user" },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const handleAddUser = (user) => {
    setUsers((prev) => [user, ...prev]);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)),
    );
    setEditUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-text-primary">Users</h1>

        <Button icon={Plus} onClick={() => setIsModalOpen(true)}>
          Add User
        </Button>
      </div>

      <UsersTable
        users={users}
        loading={loading}
        onDelete={handleDeleteUser}
        onEdit={setEditUser}
      />

      <AddUserModal
        isOpen={isModalOpen || !!editUser}
        onClose={() => {
          setIsModalOpen(false);
          setEditUser(null);
        }}
        onAdd={handleAddUser}
        onUpdate={handleUpdateUser}
        editData={editUser}
      />
    </div>
  );
};

export default Users;
