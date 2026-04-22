import "./EditName.css";
export const EditModal = ({ value, value2, closeFunc, entername, warning }) => {
  return (
    <>
      <div className="EditMain">
        <div className="editname">
          <form action="">
            <h1>Enter Player Names</h1>
            <p>{warning}</p>
            <input
              onChange={value}
              type="text"
              placeholder="player1"
              required
            />
            <input
              onChange={value2}
              type="text"
              placeholder="player2"
              required
            />
          </form>
          <button type="submit" onClick={entername}>
            Save
          </button>
          <button type="submit" onClick={closeFunc}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};
