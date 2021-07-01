import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { useReducer, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import TutorialDataService from '../../serviceApi/ServiceWorker'

const initialState = {
    men: [],
    women: []
}

const reducer = (state, action) => {
    console.log(action.type);
    console.log(action.payload);
}

const Hhh = () => {
    const [adams, setAdams] = useState(() => { return [] })
    const [gender, setGender] = useState('men')
    const [state, dispatch] = useReducer(reducer, initialState)
    const { id } = useParams();


    useEffect(() => {
        // TutorialDataService.get(2)
        axios.get("http://localhost:3022/perfume" + id)
            .then((response) => {
                // console.log(response.data);
                setAdams(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleChange = (e) => {
        setGender(e.target.value)
    }
    return (
        <>{
            adams.map((both) => {
                const { men, women } = both
                console.log(id);
                // console.log(typeof(men));
                // if (gender === 'men') {
                // console.log(men);
                // for (const data in men) {
                //      console.log(men[data]);
                //      Object.values(men[data]).map((index)=>{
                //          console.log(`${index}`);
                //     men.map((all) => {
                //         return (
                //             <div>
                //                 <h4>{all.title}</h4>
                //             </div>
                //         )
                //     })
                // }
                // Object.values(men)
                // .map((key,values)=>{console.log(key,values);})
                // dispatch({type:'men', payload:men})
                // vp.map((all)=>{
                //     const {id, title, image, price, size} = all
                //     return(<div key={id}>
                //         <img src={image} alt=":-)" />
                //         <h1>{title}</h1>
                //         <h5>{size}</h5>
                //         <h5>{price}</h5>
                //     </div>)
                // })
                // }
                // else if (gender === 'women') {
                //     console.log(women);

                // }
                // dispatch({type:'women', payload:women})
                // wp.map((all)=>{
                //     const {id, title, image, price, size} = all
                //     return(<div key={id}>
                //         <img src={image} alt=":-)" />
                //         <h1>{title}</h1>
                //         <h5>{size}</h5>
                //         <h5>{price}</h5>
                //     </div>)
                // })
                // }

            })
        }
            <Container>

                <input type="radio" checked={gender === "men"}
                    value="men"
                    name="gender" onChange={handleChange} />For Him

                <input type="radio" checked={gender === "women"}
                    value="women"
                    name="gender" onChange={handleChange} /> For Her
            </Container>


        </>
    )
}

export default Hhh
