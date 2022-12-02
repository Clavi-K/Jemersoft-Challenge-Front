import { Route, Switch } from "react-router-dom"
import './App.css';
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <Switch>

      <Route exact path="/" component={Landing} />

    </Switch>
  );
}

export default App;
