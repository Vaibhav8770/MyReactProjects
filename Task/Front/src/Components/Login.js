import React from 'react';
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { GoSignIn } from "react-icons/go"
import { FaUserPlus } from "react-icons/fa"
import { FaUserSecret } from "react-icons/fa"
import { Typography } from '@material-ui/core';
import { Checkbox } from '@material-ui/core'; 
import { Link } from 'react-router-dom';
import { useStyles } from './Styles'



const Login = () => {
    const classes = useStyles();
    return (
        <>
            <form >
                <Grid container className={classes.loginRoot}>
                    <Grid item className={classes.form}>
                        <div className={classes.memberLogin}>
                            <FaUserSecret className={classes.User} />
                            <Typography variant='subtitle1' className={classes.Usertypo}>
                                User Login.
                            </Typography>
                        </div>
                        <TextField
                            className={classes.textField}
                            required={true}
                            id="standard-basic-username"
                            label="Username"
                            variant="outlined"
                            size="small"
                            autoFocus
                        />
                        <TextField
                            className={classes.textField}
                            required={true}
                            id="standard-basic-password"
                            label="Password"
                            variant="outlined"
                            size="small"
                        />
                        <Grid container className={classes.container}>
                            <Grid item xs={12} sm={12} lg={6} className={classes.rememberme}>
                                <Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <Typography variant='subtitle1'
                                    className={classes.remembertext}
                                >Remember me next time
                                </Typography>
                            </Grid>
                            <Button color="secondary" className={classes.forgot}>Forgot Password</Button>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.loginButton}
                            startIcon={<GoSignIn />}
                        >Login.</Button>
                    </Grid>
                    <Grid item className={classes.SignUpDiv}>
                        <div className={classes.signupSpan}>
                            <Typography variant='h4' component='h1' className={classes.signupText}>
                                Hello,
                            </Typography>
                            <Typography variant='subtitle1' component='h6' className={classes.signupText}>
                                Haven't created Account <br/> Yet ?
                            </Typography>
                            <Link to="/Signup" className={classes.signupLink}>
                                <Button variant='contained' color='primary'
                                    style={{ borderRadius: 20 }}
                                    startIcon={<FaUserPlus />}
                                >SignUp</Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default Login
