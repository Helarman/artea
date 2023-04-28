import styles from "./Questions.module.scss"
import Link from "next/link";

const Questions = () => {

    return (
        <div className={`questions`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={styles.questionsHeader}>
                        <p>Остались вопросы? Напишите нам!</p>
                    </div>
                    <div className={styles.questionsBtn}>
                        <Link href={`/request`}>Связаться</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions;