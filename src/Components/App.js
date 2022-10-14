import '../Styles/linkstyle.css';
import '../Styles/App.css';
import '../Styles/topthree.css'
import { AllLinks } from './links.js';
import Clock from './clock.js'
import TopThreeTodo from './TopThree.js'
function App() {
  return (
    <div>
      <Clock/>
      <TopThreeTodo />
    <AllLinks />
    </div>
  );
}

export default App;
