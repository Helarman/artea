import styles from './ServicesTabs.module.scss'
import { useState } from 'react'



const Tab = (attributes) => {
    //Стрелка
    const OpenButton = () => { 
        return (
            <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9393 29.0607C11.5251 29.6464 12.4749 29.6464 13.0607 29.0607L22.6066 19.5147C23.1924 18.9289 23.1924 17.9792 22.6066 17.3934C22.0208 16.8076 21.0711 16.8076 20.4853 17.3934L12 25.8787L3.51472 17.3934C2.92893 16.8076 1.97919 16.8076 1.3934 17.3934C0.807611 17.9792 0.807611 18.9289 1.3934 19.5147L10.9393 29.0607ZM10.5 0L10.5 28H13.5L13.5 0L10.5 0Z" fill="#2A2A2A" />
            </svg>
        )
    }   
    //Крестик
    const HideButton = () => { 
        return (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5 3L3 24.5" stroke="#2A2A2A" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" />
                <path d="M3 3L24.5 24.5" stroke="#2A2A2A" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
        )
    };
    //обработка клика для открытия текста
    const [serviceOpen, setServiceOpen] = useState(`false`);
    const toggleService = () => {
        setServiceOpen(!serviceOpen)
    };
    //обработка клика для смены кнопки
    const [buttonOpen, setButtonOpen] = useState(`false`);
    const toggleButton = () => {
        setButtonOpen(!buttonOpen)
    };

    return (
        <div className={styles.service} onClick={() => { toggleService(); toggleButton(); }}>
            <div className={styles.serviceHeader}>
                <h1>{attributes.attributes.title}</h1>
            </div>

            {serviceOpen ? <div className={`${serviceOpen ? `${styles.openButton}` : `${styles.hidecloseButton}`}`}><OpenButton /></div> : <div className={`${serviceOpen ? `${styles.hidecloseButton}` : `${styles.openButton}`}`}><HideButton /></div>}
        
            <div className={styles.serviceLine}></div>

            <div className={`${serviceOpen ? `${styles.serviceText}` : `${styles.openText}`}`}>
                <p>{attributes.attributes.description}</p>
            </div>
        </div>
    )
};

export default Tab;