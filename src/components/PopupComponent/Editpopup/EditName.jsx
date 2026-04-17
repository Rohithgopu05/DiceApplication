import "./EditName.css";
export const EditModal = ({ closeFunc }) => {
  return (
    <>
      <div className="EditMain">
        <div className="editname">
          <form action="">
            <h1>Enter Player Name</h1>
            <input type="text" placeholder="player one" required />
            <input type="text" placeholder="player two" required />
          </form>
          <button type="submit" onClick={closeFunc}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};
