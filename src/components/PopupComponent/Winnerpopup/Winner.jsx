import "./Winner.css";
export const Winnerpopup = ({ Winner }) => {
  return (
    <>
      <div className="winpop">
        <h1>{` Player1 won the game`}</h1>
        <button onClick={Winner}>Congratulations</button>
      </div>
    </>
  );
};
