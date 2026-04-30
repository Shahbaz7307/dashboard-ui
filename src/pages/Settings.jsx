import ProfileCard from "../components/settings/ProfileCard";
import PasswordCard from "../components/settings/PasswordCard";
import PreferencesCard from "../components/settings/PreferencesCard";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-text-primary">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileCard />
        <PasswordCard />
        <PreferencesCard />
      </div>
    </div>
  );
};

export default Settings;
