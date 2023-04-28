import liststyles from "./Portfolio.module.scss"


const PortfolioTitle = ({ portfolio }) => {

    return (
        <div className={liststyles.listHeader}>
            <h1>Наши работы</h1>
            <p>Тут представлены некоторые из наших работ</p>
        </div>
    )
};

export default PortfolioTitle;