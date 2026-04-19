import "./EditName.css";
export const EditModal = ({ value, value2, closeFunc }) => {
  return (
    <>
      <div className="EditMain">
        <div className="editname">
          <form action="">
            <h1>Enter Player Name</h1>
            <input
              onChange={value}
              // value={value}
              type="text"
              placeholder="player one"
              required
            />
            <input
              // value={value2}
              onChange={value2}
              type="text"
              placeholder="player two"
              required
            />
          </form>
          <button type="submit" onClick={closeFunc}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};
