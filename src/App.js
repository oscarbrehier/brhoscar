import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.css';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/index";
import Projects from './pages/Projects';
import About from "./pages/About";

import Admin from "./pages/Admin";
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
                        <About/>
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

                <Footer/>

            </div>
        </Router>

    );

}

export default App;
