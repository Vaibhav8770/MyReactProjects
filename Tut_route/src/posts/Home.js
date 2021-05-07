import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case 'Success':
            return {
                loading: false,
                data: action.payload,
            }

        case 'Failed':
            return {
                data: {},
                loading: false,
                error: true
            }

        default:
            return ({ state })
    }
}

const Home = () => {
    const [state, dispatch] = useReducer(reducer, { data: [], loading: true, error: false })
    useEffect(() => {
        axios
            .get('http://localhost:8000/posts')
            .then((response) => {
                dispatch({ type: "Success", payload: response.data })
                console.log(response.data);
            })
            .catch((error) => {
                dispatch({ type: "Failed" })
                console.log(error);
            })
    }, [])
    console.log(state.data);
    return (<div className="main">
        {state.error && <h1>Error while Loading the Data</h1>}
        {state.loading && <h1>loooooooooding..............</h1>}
        {
            state.data.map((CurrElem) => {
                const { title, body, image, id } = CurrElem
                return (<div className="post" key={id}>
                    <h2>Name:{title}</h2>
                    <img src={image} />
                    <p>{body.slice(0,120)}</p>
                    <Link to={`/posts/${id}`}><span>Read More</span></Link>

                </div>)
            })
        }</div>)
}

export default Home
