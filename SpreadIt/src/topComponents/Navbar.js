import { Container, makeStyles, Toolbar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { InputBase } from '@material-ui/core';
import { AppBar } from '@material-ui/core'
import { Tooltip } from '@material-ui/core';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import MoreRoundedIcon from '@material-ui/icons/MoreRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import React from 'react'
import Logo from './Logos/SI.png'
import { bgColor1, bgColor2, iconColor, textColor, dividerGradientColor } from '../Home'

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: bgColor1,
        display: 'flex',
        flexDirection: 'row',
    },
    navImage: {
        width: 50,
        height: 50,
        backgroundColor: bgColor1,
        alignSelf: 'center'
    },
   
    toolDiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        position: 'relative',
        marginLeft: theme.spacing(1),
        width: '100%',
        justifySelf:'center',
        alignSelf:'center',

    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        color: textColor,
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    group: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

}))

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            {/* <PDrawer/> */}
            <Container>
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar className={classes.toolDiv}>
                            <img src={Logo} alt=".." className={classes.navImage} />
                        {/*  <img src={SLogo} alt=".." className={classes.SnavImage} />
                        <Typography varient="h3">
                            <MenuIcon style={{ color: iconColor }} />
                            Hello
                        </Typography> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon style={{ color: textColor }} />
                            </div>
                            <InputBase
                                placeholder="Search for products…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.group}>
                            <IconButton>
                                <Tooltip title="Login here" interactive>
                                    <AccountCircleIcon style={{ color: textColor }} className={classes.rightIcons} />
                                </Tooltip>
                            </IconButton>
                            <IconButton>
                                <Tooltip title="Home." interactive>
                                    <HomeRoundedIcon style={{ color: textColor }} className={classes.rightIcons} />
                                </Tooltip>
                            </IconButton>
                            <IconButton>
                                <Tooltip title="My Cart." interactive>
                                    <ShoppingCartRoundedIcon style={{ color: textColor }} className={classes.rightIcons} />
                                </Tooltip>
                            </IconButton>
                            <IconButton>
                                <Tooltip title="More." interactive>
                                    <MoreRoundedIcon style={{ color: textColor }} className={classes.rightIcons} />
                                </Tooltip>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </Container>
        </>
    )
}

export default Navbar
