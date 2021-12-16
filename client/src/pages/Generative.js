import GenrePage from "../stateful/GenrePage.js";
function Generative() {
  const isGenerative = true;
  return (
    <div>
      <GenrePage photoOrGenerative={isGenerative} />
    </div>
  );
}
export default Generative;
