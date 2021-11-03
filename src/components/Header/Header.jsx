import "./Header.scss";
import { Switch, Route, Link } from 'react-router-dom';
import App from '../../App'
import Stat from '../Stat'
import Admin from '../Admin'

const Header = () => {
    return(
        <div className="header__box box">
            <h1 className="box__text">TO DO LIST</h1>
                <ul className="nav">
                    <li className="nav__button">
                        <Link to="/" className="nav__button--item">Home</Link>
                    </li>
                    <li className="nav__button">
                        <Link to="/Stat" className="nav__button--item">Stat</Link>
                    </li>
                    <li className="nav__button">
                        <Link to="/Admin" className="nav__button--item">Admin</Link>
                    </li>
                </ul>
                <Switch>
                    {/* <Route path="/">
                        <App />
                    </Route> */}
                    <Route path="/Stat">
                        <Stat />
                    </Route>
                    <Route path="/Admin">
                        <Admin />
                    </Route>
                </Switch>
        </div>
    )
}

export default Header
