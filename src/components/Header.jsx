import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
      Header
      <Link to="/">Accueil</Link>
      <Link to="/test">Test</Link>
    </header>
  )
}

export default Header;