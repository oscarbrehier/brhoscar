import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";

function App() {

  return (

    <Router>
        <div className="App">
            <Navbar />

            <Switch>
                <Route path='/' exact>
                    <Homepage/>
                </Route>
                <Route path='/about'>

                </Route>
            </Switch>

        </div>
    </Router>

  );

}

export default App;
