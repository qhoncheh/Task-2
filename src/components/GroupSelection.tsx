import React, { useState } from "react";

interface GroupSelectionProps {
  onNext: () => void;
}

const GroupSelection: React.FC<GroupSelectionProps> = ({ onNext }) => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [newGroup, setNewGroup] = useState<string>("");
  const [groups, setGroups] = useState<string[]>(["one ", "two", " three"]);

  const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(event.target.value);
  };

  const handleNewGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGroup(event.target.value);
  };

  const handleAddGroup = () => {
    if (newGroup.trim() !== "") {
      setGroups([...groups, newGroup.trim()]);
      setNewGroup("");
    }
  };

  return (
    <div
      className="p-4 border rounded-xl"
      style={{ border: "1px solid gray", borderRadius: "14px" , marginTop: "10px"}}
    >
      <p className="mb-2">+ Select a Group</p>
      <select
        className="border rounded p-2 mb-2 w-full"
        value={selectedGroup || ""}
        onChange={handleGroupChange}
      >
        {groups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
      <div className="flex items-center mb-2">
        <input
          className="border rounded p-2 mr-2 w-full"
          type="text"
          placeholder="new group"
          value={newGroup}
          onChange={handleNewGroupChange}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddGroup}
        >
          add
        </button>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onNext}
      >
        next
      </button>
    </div>
  );
};

export default GroupSelection;
