import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import TutorialDataService from '../../serviceApi/ServiceWorker'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SubBrands from './SubBrands';
import { createContext } from 'react';




// const perfumes = { Chris_Adams, Colour_Me, Creation, Lomani, Louis_Cardin, Maryaj, MPF, Mural_De_Ruitz, New_Nb, Perfumers_Choice, Perfumers_Club };

export const profileContext = createContext();
// const initial = {
    //     data: []
    // };
    
    const Perfume = (props) => {
        const [profile, setProfile] = useState([]);
    // const reducer = (state, action) => {
        // console.log(action.type);
        // console.log(action.payload);
        // switch (action.type) {
        //     case 'Chris_Adams':
        //         return {

        //         }
        //         break;

        //     default:
        //         break;
        // }
    //     case 'Success':
    //         return {
    //             loading: false,
    //             data: action.payload,
    //         }

    //     case 'Failed':
    //         return {
    //             data: {},
    //             loading: false,
    //             error: true
    //         }

    //     default:
    //         return ({ state })
    // }
    // }
    // const [state, dispatch] = useReducer(reducer, initial)
    // const [brand, setBrand] = useState('Chris_Adams');
    useEffect(() => {
        TutorialDataService.getAll()
            // axios.get('http://localhost:3002/perfume')
            .then((response) => {
                setProfile(response.data)
                // dispatch({ type: "Success", payload: response.data })
                // console.log(response.data);
            })
            .catch((error) => {
                // dispatch({ type: "Failed" })
                console.log(error);
            })
        }, []);
        
        // console.log(profile);
        return (
            <>
            <profileContext.Provider value={profile}>
            
                {props.children}
            </profileContext.Provider>
            {
                // profile.map((currElem, index) => {
                //     const [Chris_Adams, Colour_Me, Creation, Lomani, Louis_Cardin, Maryaj, MPF, Mural_De_Ruitz, New_Nb, Perfumers_Choice, Perfumers_Club] = currElem;

                //     [Chris_Adams, Colour_Me, Creation, Lomani, Louis_Cardin, Maryaj, MPF, Mural_De_Ruitz, New_Nb, Perfumers_Choice, Perfumers_Club] = {Chris_Adams, Colour_Me, Creation, Lomani, Louis_Cardin, Maryaj, MPF, Mural_De_Ruitz, New_Nb, Perfumers_Choice, Perfumers_Club}
                // {
                //     switch (brands) {
                //         case 'Chris_Adams':
                //             return(<SubBrands/>)
                //             break;

                //         default:return (<h1>hello</h1>)
                //     }
                // }
                //     })
            }


        </>
    )
}

export default Perfume
// export
// export { Chris_Adams, Colour_Me, Creation, Lomani, Louis_Cardin, Maryaj, MPF, Mural_De_Ruitz, New_Nb, Perfumers_Choice, Perfumers_Club }
