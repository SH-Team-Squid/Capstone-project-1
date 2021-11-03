import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(120);

    const addCount = () => {
        setCount(count + 1);
    }

    const stopCount = () => {
        setCount(count - 1);
    }

    return (
        <div className="body">
            <div className="wrapper">
                <h3>Counter</h3>            
                <div id="time" className="time">{count}</div>
                <div className="bttn">
                    <button className="btn start" onClick={addCount}>Add</button>
                    <button className="btn reset" onClick={stopCount}>Reduce</button>
            </div>
            </div>
        </div>
    );
}
 
export default Home;