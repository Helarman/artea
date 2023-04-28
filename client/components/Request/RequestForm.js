import styles from './Request.module.scss'
import classnames from 'classnames'

const Arrow = () => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11.2784 15.6781L5.62844 10.0181C5.53471 9.9251 5.46032 9.8145 5.40955 9.69264C5.35878 9.57079 5.33264 9.44008 5.33264 9.30807C5.33264 9.17606 5.35878 9.04535 5.40955 8.92349C5.46032 8.80163 5.53471 8.69103 5.62844 8.59807C5.8158 8.41182 6.06925 8.30727 6.33344 8.30727C6.59763 8.30727 6.85108 8.41182 7.03844 8.59807L12.0384 13.5481L16.9884 8.59807C17.1758 8.41182 17.4293 8.30727 17.6934 8.30727C17.9576 8.30727 18.2111 8.41182 18.3984 8.59807C18.4929 8.69068 18.5681 8.80113 18.6196 8.923C18.6711 9.04488 18.6979 9.17576 18.6984 9.30807C18.6979 9.44037 18.6711 9.57126 18.6196 9.69313C18.5681 9.81501 18.4929 9.92545 18.3984 10.0181L12.7484 15.6781C12.6548 15.7796 12.5411 15.8606 12.4146 15.916C12.2881 15.9714 12.1515 16 12.0134 16C11.8753 16 11.7387 15.9714 11.6122 15.916C11.4857 15.8606 11.3721 15.7796 11.2784 15.6781Z" fill="#898989" />
		</svg>
	)
}

const RequestForm = ({ request }) => {
	const nameLabel = request.data.attributes.nameLabel;
	const namePlaceholder = request.data.attributes.namePlaceholder;
	const phoneLabel = request.data.attributes.phoneLabel;
	const phonePlaceholder = request.data.attributes.phonePlaceholder;
	const selectLabel = request.data.attributes.selectLabel;
	const smallDesctiptionLabel = request.data.attributes.smallDesctiptionLabel;
	const smallDesctiptionPlaceholder = request.data.attributes.smallDesctiptionPlaceholder;
	const recipient = request.data.attributes.recipient;

	console.log(request.data.attributes);

	return (
		<div className={`col-xl-5`}>
			<div className={styles.requestForm}>
				<form action="#">
					<label className={styles.labelForm} >{nameLabel}</label>
					<input className={classnames(styles.inputForm, styles.nameInput)} type="text" placeholder={namePlaceholder}></input>

					<label className={styles.labelForm} >{phoneLabel}</label>
					<input className={classnames(styles.inputForm, styles.phoneInput, styles.artStranger)} type="tel" placeholder={phonePlaceholder}></input>

					<label className={styles.labelForm} >{selectLabel}</label>
					<div className={styles.requestSelect}>
						<div className={styles.selectArrow}>
							<Arrow />
						</div>

						<select className={styles.connectForm} name="connect-form">
							<option value="num">По номеру телефона</option>
							<option value="tg">Telegram</option>
							<option value="wa">WhatsApp</option>
						</select>
					</div>

					<label className={classnames(styles.labelForm, styles.descriptionInput)} >Краткое описание задачи</label>
					<textarea name="descriptionForm" className={styles.descriptionForm} rows="5" placeholder="Например: необходим сайт-визитка адвоката"></textarea>

					<button className={styles.buttonForm} type="submit">Отправить</button>
				</form>
			</div>
		</div>
	)
};

export default RequestForm;