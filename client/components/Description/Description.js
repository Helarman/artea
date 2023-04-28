import styles from './Description.module.scss'

const AboutDescription = ({descriptionTitle, description}) => {
return(
    <div id="description" className={`container`}>
        <div className={`row`}>
            <div className={`col-xl-5 offset-xl-1 col-lg-6`}>
                <div className={styles.slogan}>
                <p>{descriptionTitle}</p>
                </div>
            </div>
            <div className={`col-xl-5 col-lg-6`}>
                <div className={styles.underSlogan}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)
};
    
export default AboutDescription;