import { FaFire } from "react-icons/fa";
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

export const HardRules = ({ getstarted }) => {
  return (
    <>
      <div className="RulesMain">
        {" "}
        <div className="hardRules">
          <h2>
            <FaFire />
            NEW RULES
          </h2>
          <ol>
            <li>Including the rules before here are some NEW RULES</li>
            <li>
              player LOSSES 20 points his ENTIRE score when he rolls two 6 in a
              row.After that,it's the next player's turn.
            </li>
            <li>
              The Global score is increased to 100 points.So first player
              reaching GLOBAL score wins the game.
            </li>
            <li>
              Another dice is added to make the game faster to reach GS('GLOBAL
              SCORE') and interesting.Good Luck!
            </li>
          </ol>
          <button onClick={getstarted}>Get Started</button>
        </div>
      </div>
    </>
  );
};
