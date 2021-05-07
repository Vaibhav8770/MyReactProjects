function Card(props){
    // console.log(props);
    return(
    <>
        <div className="card">
            <img src={props.image} alt="My Image" className="cardImg"/>
            <div>
                <h2 className="cardTitle">{props.title}</h2>
                <button><a href={props.requirement} target="_blank">PC Requirement</a></button>
                <button><a href={props.series} target="_blank">Game Series.</a></button>
            </div>
        </div>
  
    </>
    )
}
export {Card};