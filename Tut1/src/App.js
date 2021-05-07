import React from 'react'
import {Data} from './Data'
import {Card} from './Card';

const App = () => {
    return (<>
        <h1>🎆🎆🎆🎆🎆  Tut 1  🎆🎆🎆🎆🎆</h1>
        <div className="cards">
        {Data.map((val)=>{
            return(
                <Card
                key={val.id}
                image={val.image}
                title={val.title}
                requirement={val.requirement}
                series={val.series}
                />
                );
            })}
    </div></>)
}

export default App
