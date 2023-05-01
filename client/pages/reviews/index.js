import Head from 'next/head';
import NavbarSecondary from '@/components/Navbar/NavbarSecondary';
import HeaderSecondary from '@/components/Header/HeaderSecondary'
import Footer from '@/components/Footer/Footer'
import ReviewsList from '@/components/Reviews/ReviewsList';
import { useRouter } from 'next/router';
import styles from '@/components/Reviews/ReviewsList.module.scss'
import Error from '@/components/Error/Error';



export const getServerSideProps = async ({ query }) => {
    const { page = 1 } = query;
    const { size = 12    } = query;
    const start = +page === 1 ? 0 : (+page)

    const def = +size === 1 ? 0 : (+size)

    const [res1, res2, res3] = await Promise.all([
        fetch(`http://localhost:1337/api/global?populate=*`),
        fetch(`http://localhost:1337/api/reviews?pagination[page]=${start}&pagination[pageSize]=${def}`),
        fetch(`http://localhost:1337/api/review-page?populate=*`)
    ]);

    const [data1, data2, data3] = await Promise.all([
        res1.json(),
        res2.json(),
        res3.json()
    ])
   
    return {
        props: { global: data1, reviews: data2, pageData: data3, page: +page, size: +size },

    }
};

const ReviewsPage = ({ global, reviews, pageData, page, size }) => {

    const router = useRouter();

    const title = pageData.data.attributes.title;
    const background = pageData.data.attributes.background.data.attributes;

    const pagination = reviews.meta.pagination; //Все данные pagination
    const pageQuantity = reviews.meta.pagination.pageCount; //Количество страниц
    const total = reviews.meta.pagination.total;
    const beforePreviousPage = page - 2 //Перед предыдущей 
    const previousPage = page - 1 //Предыдущая
    const nextPage = page + 1 //Следующая
    const afterNextPage = page + 2 //После следующей

    const hidePagination = pageQuantity === 1;

    const hidePrevDots = page > 2; // Скрываем точки, если первая или вторая страница
    const hideNextDots = afterNextPage < pageQuantity; //Скрываем точки, если после страница предпоследняя или последняя 

    const hidePrevArrow = page > 1; // Скрываем стрелку, если первая страница
    const hideNextArrow = nextPage <= pageQuantity; //Скрываем стрелку, если последняя страница
    const hideFirst = previousPage === 0; //Скрвыем элементы если страница первая
    const hidePreLast = nextPage <= pageQuantity;
    const hideLast = afterNextPage <= pageQuantity;
    const itsLast = page === pageQuantity;
    const itsSecond = beforePreviousPage === 0;

    if (page < 1) {
        return (
            <Error
                errorCode={`404`}
                errorName={`Извините, запрошенная страница не найдена`}
                errorText={`Страница, которую вы ищете, могла быть удалена или временно недоступна`}
            />)
    }
    if (page > pageQuantity) {
        return (
            <Error
                errorCode={`404`}
                errorName={`Извините, запрошенная страница не найдена`}
                errorText={`Страница, которую вы ищете, могла быть удалена или временно недоступна`}
            />)
    }
    return (

        <div className={`body-sett`}>
            <Head>
                <title>Artea - web stuido</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarSecondary global={global} />
            <HeaderSecondary title={title} background={background} />

                <ul>
                    <p>current:{size}</p>
                    <a onClick={() => router.push(`/reviews??page=1&size=1`)}>1</a><br></br>
                    <a onClick={() => router.push(`/reviews?page=1&size=2`)}>2</a><br></br>
                    <a onClick={() => router.push(`/reviews?page=1&size=6`)}>6</a><br></br>
                    <a onClick={() => router.push(`/reviews?page=1&size=12`)}>12</a>
                </ul>

            <ReviewsList reviews={reviews} />

            <div id="pagination" className={` ${hidePagination ? `${styles.none}` : `${styles.navigation}`}`}>
                <div className={` ${hidePrevArrow ? `${styles.leftArrow}` : `${styles.nonActiveArrow}`}`} onClick={function () { if (hidePrevArrow) { router.push(`/reviews?page=${page - 1}&size=${size}`) } }}>
                    <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM30 4.5H1V3.5H30V4.5Z" fill="#2A2A2A" />
                    </svg>
                </div>
                <div className={styles.pageNumbers}>
                    <ul>

                        <p className={` ${hidePrevDots ? `${styles.inline}` : `${styles.none}`}`}>...</p>
                        <a className={` ${itsLast && !itsSecond ? `${styles.inline}` : `${styles.none}`}`} onClick={() => router.push(`/reviews?page=${page - 2}&size=${size}`)}>{page - 2}</a>
                        <a className={` ${hideFirst ? `${styles.none}` : `${styles.inline}`}`} onClick={() => router.push(`/reviews?page=${page - 1}&size=${size}`)}>{page - 1}</a>
                        <a className={styles.pageActive}>{page}</a>
                        <a className={` ${hidePreLast ? `${styles.inline}` : `${styles.none}`}`} onClick={() => router.push(`/reviews?page=${page + 1}&size=${size}`)}>{page + 1}</a>
                        <a className={` ${hideLast ? `${styles.inline}` : `${styles.none}`}`} onClick={() => router.push(`/reviews?page=${page + 2}&size=${size}`)}>{page + 2}</a>
                        <p className={` ${hideNextDots ? `${styles.inline}` : `${styles.none}`}`}>...</p>
                    </ul>
                </div>


                <div className={` ${hideNextArrow ? `${styles.rightArrow}` : `${styles.nonActiveArrow}`}`} onClick={function () { if (hideNextArrow) { router.push(`/reviews?page=${page + 1}&size=${size}  `) } }}
                    disabled={page <= 1}>
                    <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3536 4.35355C29.5488 4.15829 29.5488 3.84171 29.3536 3.64645L26.1716 0.464466C25.9763 0.269204 25.6597 0.269204 25.4645 0.464466C25.2692 0.659728 25.2692 0.976311 25.4645 1.17157L28.2929 4L25.4645 6.82843C25.2692 7.02369 25.2692 7.34027 25.4645 7.53553C25.6597 7.7308 25.9763 7.7308 26.1716 7.53553L29.3536 4.35355ZM0 4.5H29V3.5H0V4.5Z" fill="#2A2A2A" />
                    </svg>
                </div>
            </div>

            <Footer global={global} />
        </div>
    )

};

export default ReviewsPage;
