import "./Rules.css";
export const RulesModal = ({ Okayfunc }) => {
  return (
    <>
      <div className="RulesMain">
        <div className="rulesdisplay">
          <h1>RULES OF THE GAME!!!!!!</h1>
          <ol>
            <li>The game has two players,playing in rounds.</li>
            <li>
              In each turn,a player rolls a dice as many times as he
              whishes.Each result get added to his ROUND score.
            </li>
            <li>
              BUT,if the player rolls a 1,all from his ROUND score gets
              lost.After that,it's the next player's turn.
            </li>
            <li>
              The player can choose to 'Hold',Which means that hit ROUND score
              gets added to his GLOBAL score.After that,it's the next player's
              turn.
            </li>
            <li>
              The first player to reach 50 points GLOBAL score wins the game.
            </li>
            <li>
              You can change the predefined score of 50 in the 'Target Score'
              input box Good LUCK!!!!
            </li>
          </ol>
          <button type="submit" onClick={Okayfunc}>
            Get Started!
          </button>
        </div>
      </div>
    </>
  );
};
