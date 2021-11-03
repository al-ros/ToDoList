import "./Header.scss";
import { generatePath } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const username = "sasha";
  const userId = 11;
  const profileLink = generatePath('/profile/:username/:userId', {username, userId});
  
  return (
    <div className="header__box box">
      <h1 className="box__text">TO DO LIST</h1>
      <ul className="nav">
        <li className="nav__button">
          <Link to="/" className="nav__button--item">
            Home
          </Link>
        </li>
        <li className="nav__button">
          <Link to="/stat" className="nav__button--item">
            Stat
          </Link>
        </li>
        <li className="nav__button">
          <Link to="/stat/subpage" className="nav__button--item">
            Stat Subpage
          </Link>
        </li>
        <li className="nav__button">
          <Link to="/admin" className="nav__button--item">
            Admin
          </Link>
        </li>
        <li className="nav__button">
          <Link to={profileLink} className="nav__button--item">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
