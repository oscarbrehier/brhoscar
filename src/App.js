import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";

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
                    <About/>
                </Route>
            </Switch>

        </div>
    </Router>

  );

}

export default App;
