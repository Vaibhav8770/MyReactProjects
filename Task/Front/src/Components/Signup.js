import React from 'react'
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import useForm from './useForm';
import validate from './ValidationInfo'
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { FiUserPlus } from "react-icons/fi"

import { useStyles } from './Styles'



const Signup = () => {
    const classes = useStyles();
    const { handleChange, handleSubmit, handleOpen, handleClose, values, errors, action, formData } = useForm(validate);

    return (
        <>
            <form>
                <Grid container className={classes.signUpRoot}>
                    <Grid className={classes.subroot}>
                        <Typography variant='subtitle1' className={classes.Title}>
                            Get started with us today ! Create your account Here.
                        </Typography>


                        {/* Name */}
                        <TextField
                            className={classes.SignUptextField}
                            required
                            autoFocus
                            label="Name"
                            variant="outlined"
                            type='text'
                            autoComplete='off'
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.name &&
                            <Typography color='secondary' className={classes.errorMessage}>
                                {errors.name}
                            </Typography>}


                        {/* Username */}
                        <TextField
                            className={classes.SignUptextField}
                            required
                            label="Username"
                            variant="outlined"
                            type='text'
                            name='username'
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username &&
                            <Typography color='secondary' className={classes.errorMessage}>
                                {errors.username}
                            </Typography>}


                        {/* Email */}
                        <TextField
                            className={classes.SignUptextField}
                            required
                            label="Email"
                            variant="outlined"
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email &&
                            <Typography color='secondary' className={classes.errorMessage}>
                                {errors.email}
                            </Typography>}


                        {/* Password */}
                        <TextField
                            className={classes.SignUptextField}
                            required
                            type='password'
                            label="Password"
                            variant="outlined"
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password &&
                            <Typography color='secondary' className={classes.errorMessage}>
                                {errors.password}
                            </Typography>}


                        {/* Confirm Password */}
                        <TextField
                            className={classes.SignUptextField}
                            required
                            type='password'
                            label="Confirm Password"
                            variant="outlined"
                            name='cpassword'
                            value={values.cpassword}
                            onChange={handleChange}
                        />
                        {errors.cpassword &&
                            <Typography color='secondary' className={classes.errorMessage}>
                                {errors.cpassword}
                            </Typography>}

                        {/* <input type="file"/> */}
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.SignUpButton}
                            startIcon={<FiUserPlus />}
                            onClick={handleOpen}
                        >Sign Up</Button>
                    </Grid>

                    <Dialog
                        open={action}
                        onClose={handleClose}
                    >
                        <DialogTitle >
                            Are you want to submit the Details to create an Account ?
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleSubmit} color="primary" autoFocus>
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </form>
        </>
    )
}


export default Signup
