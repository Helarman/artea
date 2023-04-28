import styles from "./Header.module.scss"
import HeaderContent from "./HeaderContent";
import Navbar from "../Navbar/Navbar";
import classnames from "classnames";

const Header = ({ global, headerContent }) => {
	const NavigationLinks = global.data.attributes.Navbar;

	return (
		<div className={styles.fpage}>
			<Navbar links={NavigationLinks} />
			<HeaderContent content={headerContent} />
		</div>
	)
};

export default Header;