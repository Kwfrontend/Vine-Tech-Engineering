import './accordion.styles.css';

import { useState } from 'react';

const Accordion= (data) => {
    const accdata = data;

    const [selected, setselected] = useState(null)
    const toggle = i => {
       if (selected === i) {
            return setselected(null)
       }
       setselected(i)
    }
    return (
        <div className="accordion-container">
                    {accdata.data.map((item, i)=>( 
                        <div className="item">
                            <div className="accordion-question-container">
                                <h2 className='accordion-question' onClick={() => toggle(i)}>{item.question}<span className='state-symbol'>{selected === i ? '-' : '+'}</span></h2>
                            </div>
                            <div className={selected === i ? 'show' : 'accordion-answer-container'}>
                                {item.anwser}
                            </div>
                        </div>
                    ))}
        </div>
       
    )
}


export default Accordion;