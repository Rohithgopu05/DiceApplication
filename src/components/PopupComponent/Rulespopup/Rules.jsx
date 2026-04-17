import "./Rules.css";
export const RulesModal = ({ Okayfunc }) => {
  return (
    <>
      <div className="rulesdisplay">
        <h1>RULES</h1>
        <ol>
          <p>dice should be rolled once</p>
          <p>dice should be rolled twice</p>
          <p>dice should be rolled once</p>
          <p>dice should be rolled once</p>
          <p>dice should be rolled once</p>
        </ol>
        <button type="submit" onClick={Okayfunc}>
          Okay
        </button>
      </div>
    </>
  );
};
