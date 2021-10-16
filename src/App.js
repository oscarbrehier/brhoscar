import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/index";
import Test from './pages/PreCommit/index';

function App() {

    return (

        <Router>
            <div className="App">
                <Navbar />

                <Switch>
                    <Route path='/' exact>
                        <Homepage/>
                    </Route>
                    <Route path='/work'>

                    </Route>
                    <Route path='/about'>

                    </Route>
                    <Route path='/contact'>

                    </Route>
                    <Route path='/test'>
                        <Test/>
                    </Route>
                </Switch>
            </div>
        </Router>

    );

}

export default App;
