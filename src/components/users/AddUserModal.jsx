import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const AddUserModal = ({ isOpen, onClose, onAdd, onUpdate, editData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setEmail(editData.email);
      setRole(editData.role);
    } else {
      setName("");
      setEmail("");
      setRole("user");
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    if (editData) {
      onUpdate({ ...editData, name, email, role });
    } else {
      onAdd({ id: Date.now(), name, email, role });
    }

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={editData ? "Edit User" : "Add User"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit">
            {editData ? "Update" : "Add"}
          </Button>
        </div>

      </form>
    </Modal>
  );
};

export default AddUserModal;