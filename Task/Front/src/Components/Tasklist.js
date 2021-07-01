import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { MdPlaylistAdd } from "react-icons/md"
import { RiTodoFill } from "react-icons/ri"
import { FiUserPlus } from "react-icons/fi"
import React, { useState, useEffect, useRef } from 'react'
import { Container, IconButton, List } from '@material-ui/core';
import { useStyles } from './Styles'
import { FiLogIn } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import TutorialDataService from '../Fetch/services/TutorialService';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import Select from 'react-select'


const Tasklist = () => {
    const classes = useStyles();
    const inputElem = useRef("");

    const [open, setOpen] = useState(false);
    const [modelopen, setModelopen] = useState(false);
    const [getall, setGetall] = useState([]);
    const [id, setId] = useState("")
    const [edit, setEdit] = useState({
        tasktitle: "",
        taskdetails: ""
    });
    const [selected, setSelected] = useState("")

    useEffect(() => {
        GetAllData();
    }, []);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    const handleModelOpen = () => {
        setModelopen(true);
    };
    const handleModelClose = () => {
        setModelopen(false);
    };


    const handleSelect = (e) => {
        setSelected(e.value)
        console.log(selected);

        GetSingleData();
    }



    // // Search Data
    const AllData = getall
    // console.log(AllData);
    const GetSingleData = () => {
        let actualSearchTerm = inputElem.current.value
        // let actualSearchTerm = inputElem
        console.log(actualSearchTerm);
        if (actualSearchTerm === "") {
            setGetall(AllData);
        }
        else {
            const NewGetAll = getall.filter((currElem) => {
                return Object.values(currElem).join('').toLowerCase().includes(actualSearchTerm);
            })
            setGetall(NewGetAll);
        }
    }



    const OptionsData = []
    getall.map((currElem, i) => {
        const { tasktitle, taskdetails } = currElem
        return (OptionsData[i] = { value: `${tasktitle}`, label: `${tasktitle}` })
    })

    const Options = OptionsData;




    // Get All Data
    const GetAllData = () => {
        TutorialDataService.getAll('/tasks/getAll')
            .then((response) => {
                setGetall(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }




    // Update Task
    const getTask = (_id) => {
        setId(_id);
        handleModelOpen();
    }

    const HandleTASK = (e, _id) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        })
    }
    const updateTask = () => {
        const { tasktitle, taskdetails } = edit
        TutorialDataService.update(`/tasks/update`, id, { tasktitle, taskdetails })
            .then((res) => { console.log(res); })
            .catch((error) => { console.log(error); })

        window.location.reload();
        handleModelClose();
    }



    // Delete Task
    const handleDelete = (_id) => {
        console.log(_id);
        TutorialDataService.remove(`/tasks/delete`, _id)
            .then((res) => { console.log(res); })
            .catch((err) => { console.log(err); })
        window.location.reload();
    }




    return (
        <>
            <AppBar position="static" className={classes.appbar}>
                <IconButton onClick={handleDrawerOpen}>
                    <RiTodoFill className={classes.ToDo} edge='start' />
                </IconButton>
                <Toolbar className={classes.title}>
                    <Typography variant="h5">
                        My Todo's
                    </Typography>
                </Toolbar>


                {/* search bar */}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <input
                        ref={inputElem}
                        placeholder="Search Task"
                        className={classes.input}
                        onChange={GetSingleData}
                    />
                </div>

                {/* react select */}
                {/* <Select 
                    options={Options} 
                    className={classes.select} 
                    onChange={handleSelect}
                    noOptionsMessage={()=>"No task with these Name"}
                    isClearable
                    isSearchable
                /> */}

            </AppBar>

            <Container className={classes.SecondNav}>
                <div className={classes.sort}>
                    <Typography color='primary' className={classes.sortName}>Sort By:</Typography>
                    <select list="browsers" name="browser" className={classes.sortInput}>
                        <option value="Alphabetically">Alphabetically</option>
                        <option value="Added Date">Added Date</option>
                    </select>
                    <Link to='/Addtask' className={classes.AddLink}><Button color="primary"
                        variant="outlined"
                        className={classes.addButton}
                        endIcon={<MdPlaylistAdd />}
                    >Add Todo's</Button></Link>
                </div>
            </Container>


            {/* Drawer */}
            <Drawer
                classes={{ paper: classes.paper }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div className={classes.drawerHeader} onClick={handleDrawerClose}>
                    <IconButton     >
                        <ChevronLeftIcon color='primary' />
                    </IconButton>
                </div>
                <Divider color='primary' />
                <List className={classes.List}>
                    <ListItem button >
                        <ListItemIcon className={classes.drawerMenuIcon}> <FiLogIn /> </ListItemIcon>
                        <ListItemText className={classes.drawerMenuText}>
                            <Link to="/Login" className={classes.Drawerlink}> Login </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon className={classes.drawerMenuIcon}> <FiUserPlus /> </ListItemIcon>
                        <ListItemText className={classes.drawerMenuText}>
                            <Link to="/Signup" className={classes.Drawerlink}> Sign Up </Link>
                        </ListItemText>
                    </ListItem>
                </List>
                <Divider color='primary' />
            </Drawer>




            {/* <Update /> */}
            <Dialog open={modelopen} onClose={handleModelClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Task Title"
                        name="tasktitle"
                        type="text"
                        fullWidth
                        value={edit.tasktitle}
                        onChange={HandleTASK}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Task Details"
                        name="taskdetails"
                        type="text"
                        fullWidth
                        value={edit.taskdetails}
                        onChange={HandleTASK}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModelClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={updateTask} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>



            {/* Display Data */}

            <Container style={{ marginTop: '5rem' }}>
                {/* <table className={classes.TableRoot}>
                    <thead className={classes.all}>
                        <tr className={classes.all}>
                            <td className={classes.srno}>Sr. No.</td>
                            <td className={classes.tasktitle}>TaskTitle</td>
                            <td className={classes.taskdetails}>TaskDetails</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getall.map((currElem, index) => {
                                const { _id, tasktitle, taskdetails } = currElem;
                                return (<tr key={_id} className={classes.all}>
                                    <td className={classes.srno}>{index}</td>
                                    <td className={classes.tasktitle}>{tasktitle}</td>
                                    <td className={classes.taskdetails}>{taskdetails}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table> */}
                <Grid container className={classes.rootTaskDiv}>
                    {
                        getall.map((currElem) => {
                            const { _id, tasktitle, taskdetails } = currElem;
                            return (
                                <Grid item key={_id} className={classes.taskCard}>
                                    <Typography variant="h5" component="h1" className={classes.taskdata1}>
                                        {tasktitle}
                                    </Typography>
                                    <Typography variant="subtitle1" component="h4" className={classes.taskdata2}>
                                        {taskdetails}
                                        <span className={classes.IconSpan}>
                                            <FaEdit size={20} className={classes.Editicon} onClick={() => getTask(_id)} />
                                            <MdDelete size={20} className={classes.Deleteicon} onClick={() => handleDelete(_id)} />
                                        </span>
                                    </Typography>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Tasklist