import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import styles from "./Portfolio.module.scss"
import React from "react";
import Slider from "react-slick";
import Link from "next/link";


const Carousel = ({cards}) => {
	const Cards = cards.data;
	//const Quantity = cards.meta.pagination.total;

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
			{Cards.map(({ id, attributes}) => (
				<div key={id}>
					<Link href={`/portfolio/${id}`}>
						<div style={{ background: `${attributes.background}`, border: `${attributes.borderWidth}px solid ${attributes.borderColor}` }} className={styles.card}>
							<div className={styles.logoCard}>
								<img src={`http://localhost:1337${attributes.previewSvg.data.attributes.url}`}></img>
							</div>
							<div className={styles.darken}>
								<div className={styles.cardDescription}>
									<p>{attributes.title}</p>
									<p>{attributes.text}</p>
								</div>
							</div>
						</div>
					</Link>
				</div>
			 ))}
		</Slider>
	);
}

export default Carousel;  