import { useState } from "react";
import Button from "../ui/Button";

const PasswordCard = () => {
  const [password, setPassword] = useState("");

  const handleChange = () => {
    console.log("Password updated:", password);
    setPassword("");
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5 space-y-4 p-6">
      <h2 className="text-lg font-semibold text-text-primary">
        Change Password
      </h2>

      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border border-border rounded-lg bg-background"
      />

      <Button onClick={handleChange}>Update Password</Button>
    </div>
  );
};

export default PasswordCard;
