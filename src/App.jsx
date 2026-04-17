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

  const rolldice = () => {
    setRandomGenNum(randomNum);
    if (ActivePlayer === 1) {
      setP1CurrentScore(totalp1CurrentScore);
    } else {
      setP2CurrentScore(totalp2CurrentScore);
    }
  };
  const holddice = () => {
    if (ActivePlayer === 1) {
      if (totalPlayer1Score >= Input) {
        setPlayer1Score(totalPlayer1Score);
        setP1CurrentScore(0);
        winnerfunction();
      } else {
        setPlayer1Score(totalPlayer1Score);
        setP1CurrentScore(0);
        setActivePlayer(0);
      }
    } else {
      if (totalPlayer2Score >= Input) {
        setPlayer2Score(totalPlayer2Score);
        setP2CurrentScore(0);
        winnerfunction();
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
    console.log("Hard mode Game");
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
  const winnerfunction = () => {
    setWinScore(!showWinScore);
  };

  return (
    <>
      <div className="hero">
        <div className="maincontainer">
          <div className={`Playerone ${ActivePlayer ? "active" : "inactive"}`}>
            <div className="TopButtons">
              <div>
                <Button icon={<FaPlay />} name="Start" />
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
              name="Player One"
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
              name="Player Two"
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
          {showeditname && <EditModal closeFunc={editplayername} />}
          {showWinScore && <Winnerpopup Winner={winnerfunction} />}
        </div>
      </div>
    </>
  );
};

export default App;
