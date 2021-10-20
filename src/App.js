import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.css';

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/index";
import Admin from "./pages/Admin";
import Projects from './pages/Projects';
import Test from './pages/PreCommit/index';

function App() {

    return (

        <Router>
            <div className="App relative">
                <Navbar />

                <Switch>
                    <Route path='/' exact>
                        <Homepage/>
                    </Route>
                    <Route path='/projects'>
                        <Projects/>
                    </Route>
                    <Route path='/about'>

                    </Route>
                    <Route path='/contact'>

                    </Route>
                    <Route path='/test'>
                        <Test/>
                    </Route>
                    <Route path="/admin">
                        <Admin/>
                    </Route>
                </Switch>

            </div>
        </Router>

    );

}

export default App;
