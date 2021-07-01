import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';



import React from 'react'
import { bgColor1, bgColor2, iconColor, textColor, dividerGradientColor } from './Home'
import perfume from './images/Perfume.png'
import bodymist from './images/bodymist.png'
import deodorant from './images/deodorant.png'
import scentshot from './images/scentshot.png'
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainCard: {
        marginTop:theme.spacing(5),
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: bgColor1,
        width: '100%',
        padding: 0,
    },
    cardImage: {
        paddingTop:45,
        width: 550,
        justifySelf:'start',
        marginLeft:100,
    },
    cardName:{
        color: textColor,
        textAlign:'center'
    },
    cardText:{
        marginTop:theme.spacing(4),
        color: textColor,
        textAlign:'center'
    },
    container:{
        marginLeft:theme.spacing(10),
        alignSelf:'center'
    },
    divider:{
        borderBottom:'20px',
        width:250,
        color:dividerGradientColor,
        height:0.5,
        justifySelf:'center',
    },   
}));

const BodyHome = () => {
    const classes = useStyles();

    return (
        <>
            {/* Card 1 */}
            <Card elevation={0} className={classes.mainCard}>
                <img src={perfume} alt="...." className={classes.cardImage}/>
                <Container className={classes.container}>
                    <hr className={classes.divider} />
                    <Typography variant="h3" component="h1" className={classes.cardName}>Perfume.</Typography>
                    <hr className={classes.divider} />
                    <Typography variant="p" component="h3" className={classes.cardText} >
                      <Box fontWeight="fontWeightRegular">Discover the Magical World <br/>of Perfumes</Box>
                    </Typography>
                </Container>
            </Card>

            {/* Card 2 */}
            <Card elevation={0} className={classes.mainCard}>
                <img src={deodorant} alt="...." className={classes.cardImage}/>
                <Container className={classes.container}>
                    <hr className={classes.divider}/>
                    <Typography variant="h4" component="h1" className={classes.cardName} >Deodorant.</Typography>
                    <hr className={classes.divider}/>
                    <Typography variant="p" component="h2" className={classes.cardText} >
                    <Box fontWeight="fontWeightRegular">Discover the Magical World<br/>of Perfumes</Box>
                    </Typography>
                </Container>
            </Card>

            {/* Card 3 */}
            <Card elevation={0} className={classes.mainCard}>
                <img src={scentshot} alt="...." className={classes.cardImage}/>
                <Container className={classes.container}>
                    <hr className={classes.divider}/>
                    <Typography variant="h4" component="h1" className={classes.cardName}>Scent Shot.</Typography>
                    <hr className={classes.divider}/>
                    <Typography variant="p" component="h2" className={classes.cardText}>
                    <Box fontWeight="fontWeightRegular">Discover the Magical World<br/>of Perfumes</Box>
                    </Typography>
                </Container>
            </Card>

            {/* Card 4 */}
            <Card elevation={0} className={classes.mainCard}>
                <img src={bodymist} alt="...." className={classes.cardImage}/>
                <Container className={classes.container}>
                    <hr className={classes.divider}/>
                    <Typography variant="h4" component="h1" className={classes.cardName}>Body Mist</Typography>
                    <hr className={classes.divider}/>
                    <Typography variant="p" component="h2" className={classes.cardText}>
                    <Box fontWeight="fontWeightRegular">Discover the Magical World <br/>of Perfumes</Box>
                    </Typography>
                </Container>
            </Card>
        </>
    )
}

export default BodyHome;
