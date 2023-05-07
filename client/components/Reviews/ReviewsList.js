import styles from "./ReviewsList.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ReviewsList = ({ reviews }) => {

    const posts = reviews.data;
    const meta = reviews.meta;

    
    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-xl-10 offset-xl-1`}>
                    {posts && posts.map(({ id, attributes }) => (
                        <AnimationOnScroll key={id} animateIn="animate__fadeIn" animateOnce="true">
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
                        </AnimationOnScroll>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ReviewsList;