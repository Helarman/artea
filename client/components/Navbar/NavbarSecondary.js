import styles from "../Header/Header.module.scss";
import Navbar from "../Navbar/Navbar";


const NavbarSecondary = ({ global }) => {
	const NavigationLinks = global.data.attributes.Navbar;

	return (
		<div className={styles.headerMinor}>
			<div className={styles.spage}>
				<div className={styles.header}>
					<Navbar links={NavigationLinks} />
				</div>
			</div>
		</div>
	)
};

export default NavbarSecondary;