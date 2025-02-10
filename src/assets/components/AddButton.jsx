const AddButton = ({ addTask }) => {
    return (
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={addTask}
      >
        Add
      </button>
    );
  };
  
  export default AddButton;
  