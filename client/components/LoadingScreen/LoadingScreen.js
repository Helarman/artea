import styles from './LoasdingScreen.module.scss'

const LoadingScreen = () => {
    return (
        <div className={styles.background}>
            <svg className={styles.circle} height="50" width="50">
                <circle
                    className={styles.path}
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="#ffffff"
                    fill="none"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                />
            </svg>
        </div>
    )
}
export default LoadingScreen;