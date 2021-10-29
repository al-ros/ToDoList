import "./Header.scss";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import App from '../../App'
import Stat from '../Stat'
import Admin from '../Admin'

const Header = () => {
    return(
        <div className="header__box box">
            <h1 className="box__text">TO DO LIST</h1>
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Stat">Stat</Link>
                    </li>
                    <li>
                        <Link to="/Admin">Admin</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/">
                        <App />
                    </Route>
                    <Route path="/Stat">
                        <Stat />
                    </Route>
                    <Route path="/Admin">
                        <Admin />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Header
