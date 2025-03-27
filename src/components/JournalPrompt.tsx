import { BiEditAlt } from "react-icons/bi";

interface JournalPromptProps {
  onYes: () => void;
  onNo: () => void;
}

const JournalPrompt: React.FC<JournalPromptProps> = ({ onYes, onNo }) => {
  return (
    <div
      className="border border-gray-500 rounded-xl flex flex-col  items-center justify-center h-screen mx-auto w-fit"
      style={{
        padding: "2px",
        display: "flex",
        width: "750px",
        border: "1px solid gray",
        height: "50px",
        borderRadius: "14px",
        margin: "auto",
      }}
    >
      <p className="p-2 flex items-center">
        <BiEditAlt className="mr-2" />
        Are you Adding journal for Today?
      </p>

      <div className="flex justify-around gap-4 px-8 mr-8 mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-2"
          onClick={onYes}
        >
          yes
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={onNo}
        >
          no
        </button>
      </div>
    </div>
  );
};

export default JournalPrompt;
