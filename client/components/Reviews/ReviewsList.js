import styles from "./ReviewsList.module.scss"
import { useRouter } from 'next/router'

const ReviewsList = ({ reviews }) => {

    const posts = reviews.data;
    const meta = reviews.meta;

    
    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-xl-10 offset-xl-1`}>
                    {posts && posts.map(({ id, attributes }) => (
                        <div key={id} className={styles.feedbackBlock}>
                            <div className={styles.feedbackName}>
                                <h1>{attributes.name}</h1>
                                <p>{attributes.organization}</p>
                            </div>
                            <div className={styles.review}>
                                <p>{attributes.text}</p>
                                <div className={styles.date}>
                                    <p>{`02/12/2021`}</p>
                                </div>
                            </div>
                            <div className={styles.line}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ReviewsList;