import React from 'react'
import { useState } from 'react';

const Time = () => {
    let t= new Date().toLocaleTimeString();
    const [time, setTime] = useState(t);
    const updateTime =()=>{
        t= new Date().toLocaleTimeString();
        setTime(t)
    }
    setInterval(updateTime,1000)
    
    return (
        <div>
            <h2>{time}</h2>
        </div>
    )

}

export default Time
