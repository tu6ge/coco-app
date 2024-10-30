import React from "react";

interface SettingsPanelProps {
  title: string;
  children: React.ReactNode;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      {/* <h2 className="text-xl font-semibold mb-6">{title}</h2> */}
      {children}
    </div>
  );
};

export default SettingsPanel;