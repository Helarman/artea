import styles from './StagesNumber.module.scss'

const AboutSteps = (steps) => {
    return (
        <div id="steps" className={styles.stages}>
            <div className={`container`}>

                <div className={styles.stagesHeader}>
                    <h1>Этапы проведения работ</h1>
                </div>

                <div className={styles.pointList}>
                    <div className={`row`}>
                        {steps.steps && steps.steps.map(({ id, title, description}) => (
                            <div key={id} className={`col-xl-3 col-lg-3 col-md-6`}>
                                <div className={styles.point}>
                                    <h1>{id}</h1>
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSteps;