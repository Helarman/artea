import styles from './Counter.module.scss'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';



const AboutCounters = ({ counters }) => {

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        rootMargin: '-100px',
      });
  
      
    function Counter({ val, time }) {
        const [currVal, setCurrVal] = useState(0);

        useEffect(() => {
            inView && currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
        }, [currVal]);

        return <div>{currVal}+</div>;
    }
    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-xl-10 offset-xl-1 col-lg-12`}>
                    <div className={styles.counters}>
                        <ul ref={ref}>
                            {counters && counters.map(({ id, number, description, time, }) => (
                                <li key={id}><h1><Counter val={number} time={time} /></h1><p>{description}</p></li>
                            ))}
                            <li className={styles.helper}></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutCounters;