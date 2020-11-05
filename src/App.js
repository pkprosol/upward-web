import ClientHome from "./ClientHome";
import Terms from "./Terms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/terms">
        <Terms />
      </Route>
      <Route exact path="/:name">
        <ClientHome />
      </Route>
    </Switch>
  </Router>
);

export default App;
