import styles from './Counter.module.scss'
import { useState, useEffect } from 'react';

function Counter({ val, time }) {
    const [ currVal, setCurrVal ] = useState(0);
  
    useEffect(() => {
      currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
    }, [ currVal ]);
  
    return <div>{currVal}+</div>;
  }

const AboutCounters = (counters) => {

return(
    <div className={`container`}>
        <div className={`row`}>
            <div className={`col-xl-10 offset-xl-1 col-lg-12`}>
                <div className={styles.counters}>
                    <ul>
                        {counters && counters.counters.map(({ id, number, description, time, }) => (
                            <li key={id}><h1><Counter val={number} time={time}/></h1><p>{description}</p></li>
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