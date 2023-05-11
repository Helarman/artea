import { useState } from 'react';
import styles from '@/components/Reviews/feedbackform.module.scss'
import Link from 'next/link';

const RequestArrow = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2784 15.6781L5.62844 10.0181C5.53471 9.9251 5.46032 9.8145 5.40955 9.69264C5.35878 9.57079 5.33264 9.44008 5.33264 9.30807C5.33264 9.17606 5.35878 9.04535 5.40955 8.92349C5.46032 8.80163 5.53471 8.69103 5.62844 8.59807C5.8158 8.41182 6.06925 8.30727 6.33344 8.30727C6.59763 8.30727 6.85108 8.41182 7.03844 8.59807L12.0384 13.5481L16.9884 8.59807C17.1758 8.41182 17.4293 8.30727 17.6934 8.30727C17.9576 8.30727 18.2111 8.41182 18.3984 8.59807C18.4929 8.69068 18.5681 8.80113 18.6196 8.923C18.6711 9.04488 18.6979 9.17576 18.6984 9.30807C18.6979 9.44037 18.6711 9.57126 18.6196 9.69313C18.5681 9.81501 18.4929 9.92545 18.3984 10.0181L12.7484 15.6781C12.6548 15.7796 12.5411 15.8606 12.4146 15.916C12.2881 15.9714 12.1515 16 12.0134 16C11.8753 16 11.7387 15.9714 11.6122 15.916C11.4857 15.8606 11.3721 15.7796 11.2784 15.6781Z" fill="#898989" />
        </svg>
    )
}

function timer(time, domain) {
    var timer = setInterval(function () {
        if (time <= 0) {
            clearInterval(timer);
            document.location = domain;
        } else {
            time--;
        }
    }, time)
}

const parseJSON = resp => (resp.json ? resp.json() : resp);
const checkStatus = resp => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp;
    }
    return parseJSON(resp).then(resp => {
        throw resp;
    });
};
const headers = {
    'Content-Type': 'application/json',
};

const NewReview = ({ inCode, page }) => {
    const connectType = page.connectType;

    const code = inCode.toString();
    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('');
    const [text, setText] = useState('');
    const [connectionType, setConnectionType] = useState('email');
    const [connect, setConnect] = useState('');

    const handleName = e => { setName(e.target.value); }
    const handleOrganization = e => { setOrganization(e.target.value); }
    const handleText = e => { setText(e.target.value); }
    const handleConnectionType = e => { setConnectionType(e.target.value); }
    const handleConnect = e => { setConnect(e.target.value); }

    const handleSubmit = async e => {

        e.preventDefault();

        const response = await fetch(`http://localhost:1337/api/reviews?populate=*`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                data: {
                    code: code,
                    name: name,
                    organization: organization,
                    text: text,
                    connectionType: connectionType,
                    connect: connect,
                    onHomepage: false,
                    publishedAt: null
                }
            }),
        })
        timer(5, "/reviews/success");

    };

    return (
        <div className={styles.requestForm}>
            <form onSubmit={handleSubmit}>
                <label className={styles.labelForm}>{page.nameLabel}</label>
                <input className={`${styles.inputForm} ${styles.nameInput}`} type="text" name="name" placeholder={page.namePlaceholder} value={name} onChange={handleName} required />
                <label className={styles.labelForm}>{page.orgLabel}</label>
                <input className={`${styles.inputForm} ${styles.nameInput}`} type="text" name="organization" placeholder={`“${page.orgPlaceholder}”`} value={organization} onChange={handleOrganization} />
                <label className={styles.labelForm}>{page.connectLabel}</label>
                <div className={styles.requestSelect}>
                    <div className={styles.selectArrow}>
                        <RequestArrow />
                    </div>
                    <select className={styles.connectForm} name="connectionType" value={connectionType} onChange={handleConnectionType}>
                        {connectType.map(({ id, connectTypeLabel, type }) => (
                            <option key={id} value={type}>{connectTypeLabel}</option>
                        ))}
                    </select>
                </div>
                <label className={styles.labelForm}>
                    {(() => {
                        switch (connectionType) {
                            case "email": return `${page.emailLabel}`;
                            case "phone": return `${page.phoneLabel}`;
                            case "tg": return `${page.phoneLabel}`;
                            case "wa": return `${page.phoneLabel}`;
                        }
                    })()}:</label>
                <input className={`${styles.inputForm} ${styles.nameInput}`} type={(() => {
                    switch (connectionType) {
                        case "email": return `email`;
                        case "phone": return `tel`;
                        case "tg": return `tel`;
                        case "wa": return `tel`;
                    }
                })()} name="connect" value={connect} onChange={handleConnect} placeholder={(() => {
                    switch (connectionType) {
                        case "email": return `${page.emailPlaceholder}`;
                        case "phone": return `${page.phonePlaceholder}`;
                        case "tg": return `${page.phonePlaceholder}`;
                        case "wa": return `${page.phonePlaceholder}`;
                    }
                })()} />

                <label className={`${styles.labelForm} ${styles.descriptionInput}`}>{page.textLabel}</label>
                <textarea
                    className={styles.descriptionForm}
                    rows="5"
                    placeholder={page.textPlaceholder}
                    type="text"
                    name="text"
                    value={text} onChange={handleText}
                />

                <div className={styles.checkboxConf}>
                    <input className={styles.boxConf} id="box1" type="checkbox" required></input>
                    <label className={styles.labelBoxConf} for="box1">Согласен с <Link target="_blank" href="/privacy">политикой конфиденциальности</Link></label>
                </div>

                <div className={styles.checkboxPerm}>
                    <input className={styles.boxPerm} id="box2" type="checkbox" required></input>
                    <label className={styles.labelBoxPerm} for="box2">Даю свое разрешение на публикацию отзыва на сайте</label>
                </div>

                <button className={styles.buttonForm} type="submit">Отправить</button>
            </form>
        </div>

    );
};

export default NewReview;
