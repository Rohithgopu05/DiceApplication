import "./PlayerCard.css";
export const PlayerLayout = ({
  name,
  PlayerScore,
  current,
  currentscore,
  isActive,
}) => {
  return (
    <>
      <div className="Playercard">
        <h1>{name}</h1>
        <p>{PlayerScore}</p>
        <div className="currentbox">
          <h2>{current}</h2>
          <p>{currentscore}</p>
        </div>
      </div>
    </>
  );
};
