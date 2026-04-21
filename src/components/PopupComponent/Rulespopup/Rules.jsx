import "./Rules.css";
export const RulesModal = ({ Okayfunc }) => {
  return (
    <>
      <div className="RulesMain">
        <div className="rulesdisplay">
          <h1>RULES OF THE GAME!!!!!!</h1>
          <ol>
            <li>Enter the player names before the game start.</li>
            <li>One player has only one chance to roll the dice.</li>
            <li>
              Active player gets the second chance to roll the dice,if the both
              dice score is equal to six.
            </li>
          </ol>
          <button type="submit" onClick={Okayfunc}>
            Okay
          </button>
        </div>
      </div>
    </>
  );
};
