import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import styles from "./Portfolio.module.scss"
import React from "react";
import Slider from "react-slick";
import Link from "next/link";


const Carousel = () => {
	var settings = {
		infinite: true,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};
	return (

		<Slider {...settings}>
			<div>
				<Link href="#">
					<div className={styles.cardBakery}>
						<div className={styles.logoCard}>
							<img src="http://localhost:1337/uploads/Tri_Trip_3e65ab0466.svg"></img>
						</div>
						<div className={styles.darken}>
							<div className={styles.cardDescription}>
								<p>Интернет-магазин</p>
								<p>для кафе-пекарни baguettvest</p>
							</div>
						</div>
					</div>
				</Link>
			</div>

			<div>
				<Link href="#">
					<div className={styles.cardTechZone}>
						<div className={styles.logoCard}>
							<object type="image/svg+xml" data="http://localhost:1337/uploads/techzone_24b12f7f0d.svg">
								<img src="http://localhost:1337/uploads/techzone_24b12f7f0d.svg"></img>
							</object>
						</div>
						<div className={styles.darken}>
							<div className={styles.cardDescription}>
								<p>Интернет-магазин</p>
								<p>для кафе-пекарни baguettvest</p>
							</div>
						</div>
					</div>
				</Link>
			</div>

			<div>
				<Link href="#">
					<div className={styles.cardTriTrip}>
						<div className={styles.logoCard}>
							<object type="image/svg+xml" data="http://localhost:1337/uploads/Tri_Trip_3e65ab0466.svg">
								<img src="http://localhost:1337/uploads/Tri_Trip_3e65ab0466.svg"></img>
							</object>
						</div>
						<div className={styles.darken}>
							<div className={styles.cardDescription}>
								<p>Интернет-магазин</p>
								<p>для кафе-пекарни baguettvest</p>
							</div>
						</div>
					</div>
				</Link>
			</div>

			<div>
				<Link href="#">
					<div className={styles.cardRentme}>
						<div className={styles.logoCard}>
							<object type="image/svg+xml" data="http://localhost:1337/uploads/Tri_Trip_3e65ab0466.svg">
								<img src="http://localhost:1337/uploads/Tri_Trip_3e65ab0466.svg"></img>
							</object>
						</div>
						<div className={styles.darken}>
							<div className={styles.cardDescription}>
								<p>Интернет-магазин</p>
								<p>для кафе-пекарни baguettvest</p>
							</div>
						</div>
					</div>
				</Link>
			</div>

			<div>
				<Link href="#">
					<div className={styles.cardBakery}>
						<div className={styles.logoCard}>
							<object type="image/svg+xml" data="http://localhost:1337/uploads/Tri_Trip_3e65ab0466.svg">
								<img src="http://localhost:1337/uploads/Tri_Trip_3e65ab0466.svg"></img>
							</object>
						</div>
						<div className={styles.darken}>
							<div className={styles.cardDescription}>
								<p>Интернет-магазин</p>
								<p>для кафе-пекарни baguettvest</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</Slider>
	);
}

export default Carousel;  