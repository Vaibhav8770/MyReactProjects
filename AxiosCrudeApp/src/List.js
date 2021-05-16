import React, { useState, useEffect } from 'react'
import TutorialDataService from './services/TutorialService'
import isObject from 'isobject';
const List = () => {
    const [profile, setProfile] = useState([]);


    useEffect(() => {
        TutorialDataService.getAll()
            .then((response) => {
                setProfile(response.data);
                console.log(response.data);

            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    
    return (
        <>{
            profile.map((currElem) => {
                const { id, name, username, email, address } = currElem;
                return (<div key={id}>
                    <h1>Name:-{name}</h1>
                    <h2>Username:-{username}</h2>
                    <h3>Email:-{email}</h3>
                    {address.map((each)=>{
                        const {street,suite,zipcode,city} = each;
                        return(<div>
                            <p>Stree:-{street}</p>
                            <p>Suit:-{suite}</p>
                            <p>Zipcode:-{zipcode}</p>
                            <p>City:-{city}</p>
                        </div>)
                    })}
                </div>)
            })
        }</>
    )
}

export default List
