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
                {/*<Navbar />*/}

                <Switch>
                    <Route path='/' exact>
                        <Homepage/>
                    </Route>
                    <Route path='/projects'>
                        <Navbar mode={'gray'}/>
                        <Projects/>
                    </Route>
                    <Route path='/about'>
                        <Navbar mode={'gray'}/>
                    </Route>
                    <Route path='/contact'>
                        <Navbar mode={'gray'}/>
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
