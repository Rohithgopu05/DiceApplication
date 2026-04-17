import "./Rules.css";
export const RulesModal = ({ Okayfunc }) => {
  return (
    <>
      <div className="RulesMain">
        <div className="rulesdisplay">
          <h1>RULES OF THE GAME!!!!!!</h1>
          <ol >
            <li>dice should be rolled once</li>
            <li>dice should be rolled twice</li>
            <li>dice should be rolled once</li>
            <li>dice should be rolled once</li>
            <li>dice should be rolled once</li>
          </ol>
          <button type="submit" onClick={Okayfunc}>
            Okay
          </button>
        </div>
      </div>
    </>
  );
};
