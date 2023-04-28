import styles from "./Services.module.scss"
import Link from "next/link";

const ServiceArrow = () => {
    return (
        <svg width="555" height="24" viewBox="0 0 555 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M554.061 13.0607C554.646 12.4749 554.646 11.5251 554.061 10.9393L544.515 1.3934C543.929 0.807611 542.979 0.807611 542.393 1.3934C541.808 1.97919 541.808 2.92893 542.393 3.51472L550.879 12L542.393 20.4853C541.808 21.0711 541.808 22.0208 542.393 22.6066C542.979 23.1924 543.929 23.1924 544.515 22.6066L554.061 13.0607ZM0 13.5H553V10.5H0V13.5Z" fill="black" />
        </svg>
    )
};

const Services = ({ servicesContent }) => {
    const allCards = servicesContent
    const enabledCards = allCards.filter(function (cardsfilter) {
        return cardsfilter.enabled;
    });

    const cards = enabledCards;

    return (
        <div className={styles.services}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-xl-3`}>
                        <div className={styles.servicesTitle}>
                            <p>Услуги</p>
                        </div>
                    </div>
                </div>

                <div className={`row`}>
                    <div className={`col-xl-6 offset-xl-0`}>
                        {cards && cards.map(({ id, title, description, price }) => (
                            <div className={styles.servicesObject} key={id}>
                                <h5>{title}</h5>
                                <p>{description}</p>
                                <h6>от {price} ₽</h6>
                                <div className={styles.servicesLine}></div>
                            </div>
                        ))}
                    </div>

                    <div className={`col-xl-6 ${styles.servicesRight}`}>
                        <div className={styles.servicesLink}>
                            <Link href="/services">
                                <div className={styles.servicesInscription}>
                                    Узнать подробнее
                                </div>

                                <div className={styles.servicesArrow}>
                                    <ServiceArrow />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;