import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const AddProjectModal = ({ isOpen, onClose, onAdd, onUpdate, editData }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("running");
  const [due, setDue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !due) return;

    if (editData) {
      onUpdate({
        ...editData,
        name,
        status,
        due,
      });
    } else {
      onAdd({
        id: Date.now(),
        name,
        status,
        due,
      });
    }

    setName("");
    setStatus("running");
    setDue("");

    onClose();
  };

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setStatus(editData.status);
      setDue(formatDateForInput(editData.due));
    } else {
      setName("");
      setStatus("running");
      setDue("");
    }
  }, [editData]);

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return isNaN(date) ? "" : date.toISOString().split("T")[0];
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={editData ? "Edit Project" : "Add Project"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
        >
          <option value="running">Running</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="date"
          value={due}
          onChange={(e) => setDue(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
        />

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit">{editData ? "Update" : "Add"}</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProjectModal;
