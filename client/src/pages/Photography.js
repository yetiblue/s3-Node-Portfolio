import GenrePage from "../stateful/GenrePage.js";
function Photography() {
  const isGenerative = false;

  return (
    <div>
      <GenrePage photoOrGenerative={isGenerative} />
    </div>
  );
}
export default Photography;
