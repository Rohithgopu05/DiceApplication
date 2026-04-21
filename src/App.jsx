import {
  FaBeer,
  FaBook,
  FaBullseye,
  FaEdit,
  FaFire,
  FaPause,
  FaPlay,
  FaPlus,
  FaPlusCircle,
  FaRedo,
  FaRedoAlt,
  FaRegArrowAltCircleDown,
  FaRegDotCircle,
  FaRegWindowRestore,
  FaSmile,
} from "react-icons/fa";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { PlayerLayout } from "./components/PlayerComponent/PlayerCard";
import { Button } from "./components/ButtonComponent/Button";
import { InputField } from "./components/InputFieldComponent/Input";
import { DiceImage } from "./components/DiceImageCompoment/Dice";
import { EditModal } from "./components/PopupComponent/Editpopup/EditName";
import { RulesModal } from "./components/PopupComponent/Rulespopup/Rules";
import { Winnerpopup } from "./components/PopupComponent/Winnerpopup/Winner";
import { GameFlow } from "./components/PopupComponent/GameFlowPopup/Game";
const App = () => {
  const [randomGeneNum, setRandomGenNum] = useState(1);
  const [P1CurrentScore, setP1CurrentScore] = useState(0);
  const [P2CurrentScore, setP2CurrentScore] = useState(0);
  const [ActivePlayer, setActivePlayer] = useState(1);
  const [Player1Score, setPlayer1Score] = useState(0);
  const [Player2Score, setPlayer2Score] = useState(0);
  const [Input, setInput] = useState(10);
  const [showeditname, seteditname] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showWinScore, setWinScore] = useState(false);
  const [Winnername, setWinnerName] = useState("");
  const [winnerscore, setWinningScore] = useState(0);
  const [PlayerName1, setPlayerName1] = useState("Player One");
  const [PlayerName2, setPlayerName2] = useState("Player Two");
  const [Start, setStart] = useState(false);
  const [HardMode, setHardMode] = useState(false);

  const randomNum = Math.ceil(Math.random() * 6);
  const totalPlayer1Score = Player1Score + P1CurrentScore;
  const totalPlayer2Score = Player2Score + P2CurrentScore;
  const totalp1CurrentScore = P1CurrentScore + randomNum;
  const totalp2CurrentScore = P2CurrentScore + randomNum;

  const newgamefunc = () => {
    setActivePlayer(1);
    setP1CurrentScore(0);
    setP2CurrentScore(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
  };

  const startfunc = () => {
    setStart(!Start);
    seteditname(!showeditname);
  };

  const rolldice = () => {
    setRandomGenNum(randomNum);
    if (randomNum !== 1) {
      if (ActivePlayer === 1) {
        setP1CurrentScore(totalp1CurrentScore);
      } else {
        setP2CurrentScore(totalp2CurrentScore);
      }
    } else {
      if (ActivePlayer === 1) {
        setP1CurrentScore(0);
      } else {
        setP2CurrentScore(0);
      }
      setActivePlayer(1-ActivePlayer);
    }
  };
  const holddice = () => {
    if (ActivePlayer === 1) {
      if (totalPlayer1Score >= Input) {
        setPlayer1Score(totalPlayer1Score);
        setP1CurrentScore(0);
        winnerfunction("Player One", totalPlayer1Score);
      } else {
        setPlayer1Score(totalPlayer1Score);
        setP1CurrentScore(0);
        setActivePlayer(0);
      }
    } else {
      if (totalPlayer2Score >= Input) {
        setPlayer2Score(totalPlayer2Score);
        setP2CurrentScore(0);
        winnerfunction("Player Two", totalPlayer2Score);
      } else {
        setPlayer2Score(totalPlayer2Score);
        setP2CurrentScore(0);
        setActivePlayer(1);
      }
    }
  };
  const normalclickmode = () => {
    console.log("Normal mode Game");
  };
  const Hardclickmode = () => {
    setHardMode(!HardMode);
  };
  const InputScore = (e) => {
    setInput(e.target.value);
  };
  const displayRules = () => {
    setShowRules(!showRules);
  };
  const editplayername = () => {
    seteditname(!showeditname);
  };
  const winnerfunction = (name, score) => {
    setWinnerName(name);
    setWinningScore(score);
    setWinScore(!showWinScore);
  };
  const InputName1 = (e) => {
    setPlayerName1(e.target.value);
  };
  const InputName2 = (e) => {
    setPlayerName2(e.target.value);
  };

  return (
    <>
      <div className="hero">
        <div className="maincontainer">
          <div className={`Playerone ${ActivePlayer ? "active" : "inactive"}`}>
            <div className="TopButtons">
              <div>
                <Button
                  icon={<FaPlay />}
                  name="Start"
                  Buttonfunction={startfunc}
                />
                {Start && <GameFlow okayfunc={startfunc} />}
              </div>
              <div>
                <Button
                  icon={<FaPlusCircle />}
                  name="New Game"
                  Buttonfunction={newgamefunc}
                />
              </div>
            </div>
            <PlayerLayout
              isActive={ActivePlayer}
              name={PlayerName1}
              PlayerScore={Player1Score}
              current="Current Score"
              currentscore={P1CurrentScore}
            />
            <DiceImage randomNum={randomGeneNum} />
            <div className="MiddleButtons">
              <Button
                icon={<FaRedo />}
                name="Roll Dice"
                Buttonfunction={rolldice}
              />
              <Button
                icon={<FaPause />}
                name="Hold Turn"
                Buttonfunction={holddice}
              />
            </div>
          </div>
          <div className={`Playertwo ${!ActivePlayer ? "active" : "inactive"}`}>
            <PlayerLayout
              name={PlayerName2}
              PlayerScore={Player2Score}
              current="Current Score"
              currentscore={P2CurrentScore}
            />
          </div>
        </div>
        <div className="BottomButtons">
          <Button icon={<FaSmile />} name="Normal Mode" />
          <Button icon={<FaFire />} name="Hard Mode" />
          <InputField icon={<FaBullseye />} input={InputScore} />
          <Button
            icon={<FaBook />}
            name="Rules"
            Buttonfunction={displayRules}
          />
          {showRules && <RulesModal Okayfunc={displayRules} />}
          <Button
            icon={<FaEdit />}
            name="Edit"
            Buttonfunction={editplayername}
          />
          {showeditname && (
            <EditModal
              closeFunc={editplayername}
              value={InputName1}
              value2={InputName2}
            />
          )}
          {showWinScore && (
            <Winnerpopup
              Winner={winnerfunction}
              name={Winnername}
              score={winnerscore}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
