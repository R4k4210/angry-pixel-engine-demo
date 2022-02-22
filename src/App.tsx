import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/page/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
