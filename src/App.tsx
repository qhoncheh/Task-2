
import  { useState } from "react";
import JournalPrompt from "./components/JournalPrompt";
import GroupSelection from "./components/GroupSelection";


function App() {
  const [showGroupSelection, setShowGroupSelection] = useState<boolean>(false);

  const handleYes = () => {
    setShowGroupSelection(true);
  };

  const handleNo = () => {
    // باز کردن تقویم
  };
  return (
  <div className="flex flex-col justify-center items-center h-screen w-full text-center ">
    <JournalPrompt onYes={handleYes} onNo={handleNo} />
    {showGroupSelection && <GroupSelection onNext={() => {}} />}
  </div>
  );
}


  export default App;