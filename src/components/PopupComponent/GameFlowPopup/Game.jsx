import "./Game.css";
export const GameFlow = ({ okayfunc }) => {
  return (
    <>
      <div className="gamemain">
        <div className="gameflow">
          <h1>Game Flow!!!!</h1>
          <p>
            When the player clicks Start, the game begins with Player One. By
            clicking Roll Dice, a random number is added to the current score.
            The player can keep rolling to increase the score or click Hold to
            add the current score to their total and pass the turn to the next
            player. If a player rolls a 1, their current score is lost and the
            turn switches automatically. The players continue taking turns until
            one player reaches the target score, after which a winner popup is
            displayed announcing the winner and ending the game.
          </p>
          <button type="submit" onClick={okayfunc}>
            Continue!!
          </button>
        </div>
      </div>
    </>
  );
};
