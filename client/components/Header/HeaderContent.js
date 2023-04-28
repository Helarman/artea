import styles from "./Header.module.scss"
import Link from "next/link";

const HeaderContent = (headerContent) => {
	const content = headerContent.content;
	const title = content.headerTitle;
	const text = content.headerText;
	const buttons = content.headerButton;

	return (
		<div className={`container`}>
			<div className={`row`}>
				<div className={`col-xl-8 col-lg-9 col-md-12`}>
					<div className={styles.sectionHeader}>
						<p>{title}</p>
					</div>
				</div>

				<div className={`col-xl-7 col-lg-8 col-md-12`}>
					<div className={styles.underheader}>
						<p>{text}</p>
					</div>
				</div>

				<div className={`col-xl-6`}>
					<div className={styles.mainBtn}>
						{buttons.map(({ id, label, link }) => (
							<Link key={id} href={link}>
								{label}
							</Link>
						))}
					</div>
				</div>

				<div className={styles.mainPageArrow}>
					<a href="#features">
						<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="32" cy="32" r="31" stroke="#D9D9D9" strokeWidth="2" />
							<path d="M30.9393 50.0607C31.5251 50.6464 32.4749 50.6464 33.0607 50.0607L42.6066 40.5147C43.1924 39.9289 43.1924 38.9792 42.6066 38.3934C42.0208 37.8076 41.0711 37.8076 40.4853 38.3934L32 46.8787L23.5147 38.3934C22.9289 37.8076 21.9792 37.8076 21.3934 38.3934C20.8076 38.9792 20.8076 39.9289 21.3934 40.5147L30.9393 50.0607ZM30.5 15L30.5 49H33.5V15H30.5Z" fill="#D9D9D9" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
};

export default HeaderContent;