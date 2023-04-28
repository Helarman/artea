import styles from "./Reviews.module.scss"

const Quotes = () => {
    return (
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_224_409)">
                <path d="M7.82156 0.578125H0.425415V7.05H4.63233C4.59354 11.08 0.838665 11.8412 0.838665 11.8412C0.838665 11.8412 0.818873 11.9761 0.838665 14.4224C7.09877 13.2214 7.76535 8.51221 7.81958 7.05H7.82117V7.00963C7.82948 6.75946 7.82117 6.60271 7.82117 6.60271L7.82156 0.578125Z" fill="#303030" />
                <path d="M17.996 6.60231V0.578125H10.6003V7.05H14.8076C14.7688 11.08 11.0139 11.8412 11.0139 11.8412C11.0139 11.8412 10.9942 11.9761 11.0139 14.4224C17.274 13.2214 17.9406 8.51221 17.9949 7.05H17.9964V7.00963C18.0044 6.75946 17.996 6.60231 17.996 6.60231Z" fill="#303030" />
            </g>
            <defs>
                <clipPath id="clip0_224_409">
                    <rect width="18" height="15" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

const Reviews = ({ Reviews }) => {

    const firstReview = Reviews.reviewCard1;
    const secondReview = Reviews.reviewCard2;
    const thirdReview = Reviews.reviewCard3;

    return (
        <div>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={styles.reviewHeader}>
                        <p>Отзывы</p>
                    </div>


                    <div className={`col-xl-4 col-lg-4`}>
                        <div className={styles.reviewCard}>
                            <img src="http://localhost:1337/uploads/1620868329_30_oir_mobi_p_milie_kapibari_zhivotnie_krasivo_foto_31_b6bb91ebce.jpg" alt="avatar-1"></img>
                            <div className={styles.reviewText}>
                                <p>
                                    <Quotes className={styles.quotes} />
                                    {firstReview.text}
                                </p>
                                <div className={styles.reviewLine}></div>
                                <h5 className={styles.reviewName}>{firstReview.Name} {firstReview.Lastname}</h5>
                                <h6>{firstReview.Company}</h6>
                            </div>
                        </div>
                    </div>

                    <div className={`col-xl-4 col-lg-4`}>
                        <div className={styles.reviewCard}>
                            <img src="http://localhost:1337/uploads/1620868329_30_oir_mobi_p_milie_kapibari_zhivotnie_krasivo_foto_31_b6bb91ebce.jpg" alt="avatar-1"></img>
                            <div className={styles.reviewText}>
                                <p>
                                    <Quotes className={styles.quotes} />
                                    {secondReview.text}
                                </p>
                                <div className={styles.reviewLine}></div>
                                <h5 className={styles.reviewName}>{secondReview.Name} {secondReview.Lastname}</h5>
                                <h6>{secondReview.Company}</h6>
                            </div>
                        </div>
                    </div>

                    <div className={`col-xl-4 col-lg-4`}>
                        <div className={styles.reviewCard}>
                            <img src="http://localhost:1337/uploads/1620868329_30_oir_mobi_p_milie_kapibari_zhivotnie_krasivo_foto_31_b6bb91ebce.jpg" alt="avatar-1"></img>
                            <div className={styles.reviewText}>
                                <p>
                                    <Quotes className={styles.quotes} />
                                    {thirdReview.text}
                                </p>
                                <div className={styles.reviewLine}></div>
                                <h5 className={styles.reviewName}>{thirdReview.Name} {thirdReview.Lastname}</h5>
                                <h6 className={styles.reviewCompany}>{thirdReview.Company}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Reviews;