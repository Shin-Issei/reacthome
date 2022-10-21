import "../Styles/linkstyle.css";
import "../Styles/App.css";
import "../Styles/topthree.css";
import TopThreeTODO from "./TopThreeTODO";
import { AllLinks } from "./links.js";
import Clock from "./clock.js";
function App() {
  return (
    <div id="app">
      <Clock />
      <TopThreeTODO/>
      <AllLinks />
    </div>
  );
}

export default App;
