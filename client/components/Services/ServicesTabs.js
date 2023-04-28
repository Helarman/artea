import styles from './ServicesTabs.module.scss';
import Tab from './Tab';


const ServicesTabs = (services) => {
    const allServices = services.services;
    const enabledServices = allServices.filter(function (servicesfilter) {
        return servicesfilter.attributes.enabled;
    });


    return (
        <div className={styles.services}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-xl-10 offset-xl-1`}>
                        {enabledServices && enabledServices.map(({ id, attributes }) => (
                            <Tab key={id} attributes={attributes}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ServicesTabs;