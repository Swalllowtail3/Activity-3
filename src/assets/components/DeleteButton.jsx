const DeleteButton = ({ deleteTask }) => {
    return (
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={deleteTask}
      >
        Delete
      </button>
    );
  };
  
  export default DeleteButton;
  