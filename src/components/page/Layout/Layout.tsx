import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import GameContainer from "../../game/GameContainer";

const Layer = () => {
  return (
    <Switch>
      <Route exact path={"/game"} component={GameContainer} />
      <Route exact path={"/"} component={Home} />
    </Switch>
  );
};

export default Layer;
