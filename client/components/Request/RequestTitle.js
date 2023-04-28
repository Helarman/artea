import styles from './Request.module.scss'

const RequestTitle = ({ request }) => {
    const title = request.data.attributes.title;
    const description = request.data.attributes.descr;

    return (
        <>
            <div className={`col-xl-5`}>
                <div className={styles.requestHeader}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.requestUnderheader}>
                    <p>{description}</p>
                </div>
            </div>
            <div className={`col-xl-1 offset-xl-1 col-lg-1 offset-lg-1`}>
                <div className={styles.requestLine}></div>
            </div>
        </>
    )
}

export default RequestTitle;