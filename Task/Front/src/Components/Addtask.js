import React from 'react'
import { Container, TextField, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { useStyles } from './Styles'
import { TaskValidation } from './ValidationInfo'
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import useTask from './useTask';

const AddToDo = () => {
    const classes = useStyles();
    const { handleTask, handlePopUp, handleClose, handleSubmit, task, taskerror, action } = useTask(TaskValidation);

    return (
        <>
            <div className={classes.addTaskRoot}>
                {/* <img src={image} alt="..." className={classes.AddtaskAsideImg} /> */}
                <Container className={classes.createRootDiv}>
                    <Typography variant='h4' component='h1' className={classes.AddHeader}>Add New Task</Typography>

                    <form className={classes.AddTaskForm}>
                        <TextField
                            className={classes.TaskTextField}
                            required
                            autoFocus
                            label="TaskTitle"
                            variant="outlined"
                            type='text'
                            autoComplete='off'
                            name='tasktitle'
                            size='small'
                            value={task.tasktitle}
                            onChange={handleTask}
                        />
                        {taskerror.tasktitle &&
                            <Typography color='secondary' className={classes.errorMessage}>
                                {taskerror.tasktitle}
                            </Typography>}
                        <TextField
                            className={classes.TaskTextField}
                            multiline
                            rows={4}
                            required
                            label=" TaskDetails"
                            variant="outlined"
                            type='text'
                            autoComplete='off'
                            name='taskdetails'
                            size='small'
                            value={task.taskdetails}
                            onChange={handleTask}
                        />
                        
                        {taskerror.taskdetails &&
                            <Typography color='secondary' className={classes.errorMessage}>
                                {taskerror.taskdetails}
                            </Typography>}
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.AddTaskButton}
                            // startIcon={<GoSignIn />}
                            onClick={handlePopUp}
                        >Add Task</Button>

                        <Dialog
                            open={action}
                            onClose={handleClose}
                        >
                            <DialogTitle >
                                Are you want to add the task to your ToDo's ?
                        </DialogTitle>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                            </Button>
                                <Button onClick={handleSubmit} color="primary" autoFocus>
                                    Add Task
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </form>
                </Container>

            </div>
        </>
    )
}

export default AddToDo
