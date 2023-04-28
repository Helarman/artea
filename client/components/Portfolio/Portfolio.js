import classnames from "classnames";
import styles from "./Portfolio.module.scss"
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel"


const Portfolio = ({ portfolio }) => {
	const cards = portfolio;
	return (
		<div className={styles.portfolio}>
			<div className={`container`}>
				<div className={`row`}>
					<div className={`col-xl-3`}>
						<div className={styles.sectionTitle}>
							<p>Наши<br></br>проекты</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.carousel}>
				<Carousel cards={cards} />
			</div>

			<div className={`container`}>
				<div className={`row`}>
					<div className={classnames(`col-xl-2 offset-xl-5`)}>
						<div className={styles.portfolioBtn}>
							<button> <Link href={`/portfolio`}>
								Посмотреть все работы
							</Link></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Portfolio;