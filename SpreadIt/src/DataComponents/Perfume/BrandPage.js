import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Grid, makeStyles, Paper } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const reducer = (state, action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case 'success':
            return {
                data: action.payload
            }
            break;
        case 'failed':
            return {
                data: []
            }
            break;
    }
}

const useStyles = makeStyles((theme) => ({
    gridCard: {
        maxWidth: 1000,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'2rem'
    },
    card: {
        maxWidth: 300,
        // flexDirection:'row'
        // gridTemplateColumns: 'repeat(3,auto)'
    },
    cardMedia: {
        padding: theme.spacing(8),
        height: 100,
        borderRadius:40
    },
    cardContent: {
        textAlign: 'center',
    },
}))

const BrandPage = () => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, { data: [] })
    useEffect(() => {
        axios.get('http://localhost:3002/MainBrands')
            .then((response) => {
                console.log(response.data);
                dispatch({ type: 'success', payload: response.data })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: 'failed', payload: [] })
            })
    }, []);
    return (
        <>
            
            <Grid container className={classes.gridCard} justify="center" spacing={3}>
                {
                    state.data.map((one_by_one) => {
                        const { id, image, title } = one_by_one
                        return (
                            <Grid item xs={4}>
                                <div className={classes.card} key={id} >
                                    {/* <Paper> */}
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={image}
                                            />
                                            <CardContent>
                                                <Typography className={classes.cardContent}>{title}</Typography>
                                            </CardContent>
                                    {/* </Paper> */}
                                </div>
                            </Grid>
                        )

                    })
                }
            </Grid>
        </>
    )
}

export default BrandPage
