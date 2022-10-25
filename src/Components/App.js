import "../Styles/linkstyle.css";
import "../Styles/App.css";
import "../Styles/topthree.css";
import { AllLinks } from "./links.js";
import Clock from "./clock.js";
import TopThreeTODO from "./TopThree";
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
