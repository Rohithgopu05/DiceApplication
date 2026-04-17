import "./Dice.css";
export const DiceImage = ({ randomNum }) => {
  return (
    <>
      <div className="DiceImage">
        <img src={`/src/assets/dice-${randomNum}.png`} alt="Dice-Image" />
      </div>
    </>
  );
};
