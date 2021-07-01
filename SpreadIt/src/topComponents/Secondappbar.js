import React from 'react'

import { AppBar, Avatar, Chip, Toolbar } from '@material-ui/core'
import { Container, makeStyles } from '@material-ui/core'

import { bgColor1, bgColor2, iconColor, textColor, dividerGradientColor } from '../Home'
import BodyMist from './Logos/bodymist.svg'
import Deo from './Logos/deo.svg'
import Perfume from './Logos/perfume.svg'
import Scent from './Logos/scent.svg'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    main: {

        margin: 'auto',
        marginTop: theme.spacing(10),
        backgroundColor: '#d8d8d8',
        width: 800,
    },
    categ:{
        width:150,
        backgroundColor: bgColor1,
        color:textColor,
        marginLeft:20 ,
        marginRight:20 ,
    },
    divider1:{
        width:700,
        // height:0.5,
        backgroundColor:dividerGradientColor,
        height:0.5,
        justifySelf:'center',
        // border:'none',
        borderBottom:'20px',

    },
    divider2:{
        height:1,
        backgroundImage:dividerGradientColor,
    }
}))

const Secondappbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" className={classes.main} elevation={0} >
            <hr className={classes.divider1}/>
                <Toolbar >
                    <Chip
                        className={classes.categ}
                        size="large"
                        avatar={<Avatar variant="rounded" alt="Scent" src={Scent} />}
                        label="Scent Shot."
                    />
                    <Chip
                        className={classes.categ}
                        size="large"
                        avatar={<Avatar variant="rounded" alt="Perfume" src={Perfume} />}
                        label="Perfumes."
                    />
                    <Chip
                        className={classes.categ}
                        size="large"
                        avatar={<Avatar variant="rounded" alt="Deo" src={Deo} />}
                        label="Deodorant."
                    />
                    <Chip
                        className={classes.categ}
                        size="large"
                        avatar={<Avatar variant="rounded" alt="BodyMist" src={BodyMist} />}
                        label="Body Mist."
                    />
                    
                </Toolbar>
            </AppBar>
            <Divider className={classes.divider2}/>
        </>
    )
}

export default Secondappbar
