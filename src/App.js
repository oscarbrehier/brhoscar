import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.css';

import Navigation from "./components/Navigation";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/index";
import Projects from './pages/Projects';
import About from "./pages/About";
import Home from "./pages/Home";

function App() {

    return (

        <Router>
            <div className="App relative">
                <Navigation/>

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
                    <Route path='/home'>
                        <Home/>
                    </Route>
                </Switch>

                {/*<Footer/>*/}

            </div>
        </Router>

    );

}

export default App;
