import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.css';

import Navigation from "./components/Navigation";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/index";
import Work from './pages/Work';
import About from "./pages/About";
import Contact from './pages/Contact';
import Error from './pages/404'

function App() {

    return (

        <Router>
            <div className="App relative">

                <Navigation/>

                <Switch>

                    <Route path='/' component={Homepage} exact/>
                    <Route path='/work' component={Work}/>
                    <Route path='/about' component={About}/>
                    {/*<Route path='/contact' component={Contact}/>*/}
                    <Route component={Error}/>

                </Switch>

                <Footer/>

            </div>
        </Router>

    );

}

export default App;
