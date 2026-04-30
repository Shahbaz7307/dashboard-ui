import { useState } from "react";
import Button from "../ui/Button";

const ProfileCard = () => {
  const [name, setName] = useState("Shahbaz");
  const [email, setEmail] = useState("shahbaz@email.com");

  const handleSave = () => {
    console.log({ name, email });
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5 space-y-4 p-6">
      <h2 className="text-lg font-semibold text-text-primary">Profile</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border border-border rounded-lg bg-background"
        placeholder="Name"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-border rounded-lg bg-background"
        placeholder="Email"
      />

      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  );
};

export default ProfileCard;
