import styles from "./Stages.module.scss"
import classNames from "classnames";

const Stages = () => {

return(
    <div className={styles.stages}>
		<div className={`container`}>
			<div className={`row`}>
				<div className={styles.stagesHeader}>
					<p>Этапы проведения работ</p>
				</div>
			</div>
			<div className={`row`}>
				<div className={`col-lg-12`}>
					<div className={styles.steps}>
					  <svg viewBox="0 0 1440 450">
					   <path className={classNames(styles.path, styles.dash)} fill="white" stroke="black" strokeWidth="4"        d="m 329,18 804,-9.9e-5 -1.5,-1e-6 v 0 c 115.36,10.3604 115.61,179.9691 0,187.0001 v 0 L 307,205  v 0 c -115.358,10.36 -115.608,179.969 0,187 v 0  -0.5,0 h 804"  pathLength="1" />
					   <path className={classNames(styles.point1, styles.point)} d="M 353,16.5 A 16.5,16.5 0 0 1 336.5,33 16.5,16.5 0 0 1 320,16.5 16.5,16.5 0 0 1 336.5,0 16.5,16.5 0 0 1 353,16.5 Z" />
					   <path className={classNames(styles.point2, styles.point)} d="M 725,16.5 A 16.5,16.5 0 0 1 708.5,33 16.5,16.5 0 0 1 692,16.5 16.5,16.5 0 0 1 708.5,0 16.5,16.5 0 0 1 725,16.5 Z"/>
					    <path className={classNames(styles.point3, styles.point)} d="M 1111,16.5 A 16.5,16.5 0 0 1 1094.5,33 16.5,16.5 0 0 1 1078,16.5 16.5,16.5 0 0 1 1094.5,0 16.5,16.5 0 0 1 1111,16.5 Z"/>
					    <path className={classNames(styles.point4, styles.point)} d="m942 205.5a16.5 16.5 0 01-16.5 16.5 16.5 16.5 0 01-16.5-16.5 16.5 16.5 0 0116.5-16.5 16.5 16.5 0 0116.5 16.5z"/>
					    <path className={classNames(styles.point5, styles.point)} d="m534 205.5a16.5 16.5 0 01-16.5 16.5 16.5 16.5 0 01-16.5-16.5 16.5 16.5 0 0116.5-16.5 16.5 16.5 0 0116.5 16.5z"/>
					    <path className={classNames(styles.point6, styles.point)} d="m353 392.5a16.5 16.5 0 01-16.5 16.5 16.5 16.5 0 01-16.5-16.5 16.5 16.5 0 0116.5-16.5 16.5 16.5 0 0116.5 16.5z"/>
					    <path className={classNames(styles.point7, styles.point)} d="m727 392.5a16.5 16.5 0 01-16.5 16.5 16.5 16.5 0 01-16.5-16.5 16.5 16.5 0 0116.5-16.5 16.5 16.5 0 0116.5 16.5z"/>
					    <path className={classNames(styles.point8, styles.point)} d="m1112 392.5a16.5 16.5 0 01-16.5 16.5 16.5 16.5 0 01-16.5-16.5 16.5 16.5 0 0116.5-16.5 16.5 16.5 0 0116.5 16.5z"/>
					  </svg>
					  <div className={classNames(styles.discuss, styles.point)}>
					  	<p>Обсуждение</p>
					  </div>
					  <div className={classNames(styles.task, styles.point)}>
					  	<p>Составление<br></br>технического задания</p>
					  </div>
					  <div className={classNames(styles.prototype, styles.point)}>
					  	<p>Создание прототипа</p>
					  </div>
					  <div className={classNames(styles.design, styles.point)}>
					  	<p>Разработка дизайна</p>
					  </div>
					  <div className={classNames(styles.develop, styles.point)}>
					  	<p>Разработка<br></br>технической части</p>
					  </div>
					  <div className={classNames(styles.testing, styles.point)}>
					  	<p>Тестирование<br></br>и отладка</p>
					  </div>
					  <div className={classNames(styles.addContent, styles.point)}>
					  	<p>Наполнение контентом</p>
					  </div>
					  <div className={classNames(styles.regAndHost, styles.point)}>
					  	<p>Регистрация домена и<br></br>установка на хостинг</p>
					  </div>
					</div>
				</div>
				<div className={`col-md-12`}>
				<div className={styles.stepsMobile}>
					  <svg  width="23" height="604" viewBox="0 0 23 604">
					    <path className={classNames(styles.path, styles.Mobile, styles.dash	)} stroke="black" strokeWidth="3"  d="M 11.5,17 V 595" pathLength="1" />
					    <path className={classNames(styles.point1, styles.point)} d="m23 11.5a11.5 11.5 0 01-11.5 11.5 11.5 11.5 0 01-11.5-11.5 11.5 11.5 0 0111.5-11.5 11.5 11.5 0 0111.5 11.5z"/>
					    <path className={classNames(styles.point2, styles.point)} d="m23 94.5a11.5 11.5 0 01-11.5 11.5 11.5 11.5 0 01-11.5-11.5 11.5 11.5 0 0111.5-11.5 11.5 11.5 0 0111.5 11.5z"/>
					    <path className={classNames(styles.point3, styles.point)} d="m23 177.5a11.5 11.5 0 01-11.5 11.5 11.5 11.5 0 01-11.5-11.5 11.5 11.5 0 0111.5-11.5 11.5 11.5 0 0111.5 11.5z"/>
					    <path className={classNames(styles.point4, styles.point)} d="m23 260.5a11.5 11.5 0 01-11.5 11.5 11.5 11.5 0 01-11.5-11.5 11.5 11.5 0 0111.5-11.5 11.5 11.5 0 0111.5 11.5z"/>
					    <path className={classNames(styles.point5, styles.point)} d="m23 343.5a11.5 11.5 0 01-11.5 11.5 11.5 11.5 0 01-11.5-11.5 11.5 11.5 0 0111.5-11.5 11.5 11.5 0 0111.5 11.5z"/>
					    <path className={classNames(styles.point6, styles.point)} d="m23 426.5a11.5 11.5 0 01-11.5 11.5 11.5 11.5 0 01-11.5-11.5 11.5 11.5 0 0111.5-11.5 11.5 11.5 0 0111.5 11.5z"/>
					    <path className={classNames(styles.point7, styles.point)} d="m23 509.5a11.5 11.5 0 01-11.5 11.5 11.5 11.5 0 01-11.5-11.5 11.5 11.5 0 0111.5-11.5 11.5 11.5 0 0111.5 11.5z"/>
					    <path className={classNames(styles.point8, styles.point)} d="m23 592.5a11.5 11.5 0 01-11.5 11.5 11.5 11.5 0 01-11.5-11.5 11.5 11.5 0 0111.5-11.5 11.5 11.5 0 0111.5 11.5z"/>
					  </svg>
					  <div className={classNames(styles.discussMobile, styles.point)}>
					  	<p>Обсуждение</p>
					  </div>
					  <div className={classNames(styles.taskMobile, styles.point)}>
					  	<p>Составление<br></br>технического задания</p>
					  </div>
					  <div className={classNames(styles.prototypeMobile, styles.point)}>
					  	<p>Создание прототипа</p>
					  </div>
					  <div className={classNames(styles.designMobile, styles.point)}>
					  	<p>Разработка дизайна</p>
					  </div>
					  <div className={classNames(styles.developMobile, styles.point)}>
					  	<p>Разработка<br></br>технической части</p>
					  </div>
					  <div className={classNames(styles.testingMobile, styles.point)}>
					  	<p>Тестирование<br></br>и отладка</p>
					  </div>
					  <div className={classNames(styles.addContentMobile, styles.point)}>
					  	<p>Наполнение контентом</p>
					  </div>	
					  <div className={classNames(styles.regAndHostMobile, styles.point)}>
					  	<p>Регистрация домена и<br></br>установка на хостинг</p>
					  </div>
				</div>
				</div>
			</div>
		</div>
	</div>
)    
};

export default Stages;