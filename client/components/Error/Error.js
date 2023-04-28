import Link from 'next/link'
import styles from './Error.module.scss'

const Error = ({ errorCode, errorName, errorText }) => {

    return (
        <div className={styles.error}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={styles.errorHeader}>
                        <h2>{errorCode}</h2>
                    </div>
                    <div className={styles.errorUnderheader}>
                        <p>{errorName}</p>
                    </div>
                    <div className={`col-xl-6 offset-xl-3`}>
                        <div className={styles.errorMessage}>
                            <p>{errorText}</p>
                        </div>
                    </div>
                    <div className={styles.errorBtn}>
                        <Link href="/"><button>На главную</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;