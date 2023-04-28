import classNames from "classnames";
import styles from "./Features.module.scss"

//Icons
import Minimalistic from "./Icons/Minimalistic";
import PCtoPhone from "./Icons/PCtoPhone";
import Clock from "./Icons/Clock";
import Discuss from "./Icons/Discuss";

const FeaturesIcon = ({ type }) => {
	if (type == `Minimalistic`) {
		return <Minimalistic />;
	};
	if (type == `PCtoPhone`) {
		return <PCtoPhone />;
	};
	if (type == `Clock`) {
		return <Clock />;
	};
	if (type == `Discuss`) {
		return <Discuss />;
	}

};

const Features = (featuresContent) => {
	const cards = featuresContent.featuresContent.featureCard;

	return (
		<div className={styles.features} id="features">
			<div className={`container`}>
				<div className={`row`}>
					{cards && cards.map(({ id, icon, title, description }) => (
						<div className={`col-xl-3 col-lg-6 col-md-6 offset-md-0 col-sm-10 offset-sm-1 col-10 offset-1`} key={id}>
							<div className={classNames(`styles.feature-${id}`, `styles.feature-object`)} >
								<FeaturesIcon type={icon} />
								<h3>{title}</h3>
								<p>{description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
};

export default Features;