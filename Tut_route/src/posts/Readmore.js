import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'

const Readmore = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    axios
        .get('http://localhost:8000/posts/' + id)
        .then((response) => {
            const Data = response.data;
            console.log(Data);
            setData(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    const DeleteChar =()=>{
        axios
        .delete('http://localhost:8000/posts/' + id)
        .then((response) => {
            console.log("Character Deleted Successfully");
            alert("Character Deleted Successfully");
            history.push('/')
        })
    }

    return (<div className="detail">
        <h1>{data.title}</h1>
        <img src={data.image} />
        <p>{data.body}</p>
        <button onClick={DeleteChar}>Delete Character</button>
    </div>)
}

export default Readmore
