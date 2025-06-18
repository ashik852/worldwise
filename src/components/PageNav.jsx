import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/Pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <Link to="/login" className={styles.ctaLink}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
