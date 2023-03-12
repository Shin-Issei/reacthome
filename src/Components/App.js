import "../Styles/linkstyle.css";
import "../Styles/App.css";
import { AllLinks } from "./links.js";
import Clock from "./clock.js";
function App() {
  return (
    <div id="app">
      <Clock />
      <AllLinks />
    </div>
  );
}

export default App;