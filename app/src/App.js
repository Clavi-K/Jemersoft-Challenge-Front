import { Route, Switch } from "react-router-dom"
import './App.css';

import Landing from "./components/Landing/Landing";
import Pokemons from "./components/Pokemons/Pokemons";
import Details from "./components/Details/Details";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/pokemons" component={Pokemons} />
      <Route path="/pokemon/:id" component={Details} />
    </Switch>
  );
}

export default App;
