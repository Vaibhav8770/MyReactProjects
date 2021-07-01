import { fade, makeStyles } from '@material-ui/core'

const primary = '#3f51b5';
// const innerBG = '#1b263b';
const innerBG = '#e1e5f2'
const drawerWidth = 240;
// console.log(open);
const useStyles = makeStyles((theme) => ({
    // loginpage css
    loginRoot: {
        display: 'flex',
        flexDirection: 'row',
        height: '28rem',
        width: '60%',
        margin: 'auto',
        marginTop: '4rem',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: 10,
        }
    },
    form: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        display: 'flex',
        flexDirection: 'column',
        rowGap: 20,
        width: '50%',
        // height:'31rem',
        backgroundColor: innerBG,
        // marginTop: 60,
        padding: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        [theme.breakpoints.down('sm')]: {
            height: '25rem'
        }
    },
    SignUpDiv: {
        width: '45%',
        height: '30rem',
        paddingLeft: '10',
        backgroundColor: '#f76c5e',
        color: '#fff',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        textAlign: 'center',
        lineHeight: 5,
        [theme.breakpoints.down('sm')]: {
            height: '25rem'
        }
    },
    signupSpan: {
        marginTop: '10rem',
    },
    textField: {
        marginLeft: 5,
        width: '90%',
        textAlign: 'center',
        alignSelf: 'center',
        opacity: 0.8,
        [theme.breakpoints.down('sm')]: {
            // marginLeft: 15,
            width: '100%',
        }
    },
    loginButton: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        width: '80%',
        alignSelf: 'center',
        opacity: 0.8
    },
    signupText: {
        fontFamily: [`'Euphoria Script', cursive`].join(','),
        color: '#324376',
        fontWeight: 'bold'
    },
    signupLink: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        textDecoration: 'none',
        color: primary,
        width: '80%'
    },
    rightarrow: {
        width: 15,
        height: 15,
    },
    typo: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        color: primary,
        alignSelf: 'flex-end'
    },
    rememberme: {
        display: 'flex',
        marginLeft: '2rem',
        flexDirection: 'row',
        width: '50%',
        fontSize: 'x-small',
        opacity: 0.8,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 15,
            width: '100%',
        }
    },
    remembertext: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        fontSize: 'x-small',
        fontWeight: 'bold',
        marginTop: 12,
        color: primary,
        [theme.breakpoints.down('sm')]: {
            fontSize: 'xx-small',
        }
    },
    smiley: {
        position: "absolute",
        width: 30,
        height: 30,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '-1rem',
    },
    forgot: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        // position:'relative',
        fontSize: 'x-small',
        // marginBottom:'2rem',
        opacity: 0.8,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: 'xx-small',
            marginLeft: '1rem',
        }
    },
    memberLogin: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    User: {
        width: 100,
        height: 100,
        color: primary,
        alignSelf: 'center',
        opacity: 0.8,
        [theme.breakpoints.down('sm')]: {
            width: 50,
            height: 50,
        }
    },
    Usertypo: {
        fontFamily: [`'Cambo', serif`].join(','),
        color: primary,
        alignSelf: 'center',
        fontWeight: 'bold',
        opacity: 0.8
    },


    // SignUp Css
    signUpRoot: {
        display: 'flex',
        flexDirection: 'row',
        height: '30rem',
        width: '80%',
        margin: 'auto',
        marginTop: '5rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '2rem',
        }
    },
    subroot: {
        margin: 'auto',
        paddingTop: '1rem',
        backgroundColor: innerBG,
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 20,
        borderRadius: 20,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 10,
            margin: 0,
            width: '100%',
        }
    },
    SignUptextField: {
        width: '90%',
        textAlign: 'center',
        alignSelf: 'center',
        opacity: 0.8
    },
    SignUpButton: {
        width: '60%',
        alignSelf: 'center',
        opacity: 0.8,
        marginBottom: '1rem'
    },
    Title: {
        fontFamily: [`'Cambo', serif`].join(','),
        color: primary,
        alignSelf: 'center',
        fontWeight: 'bold',
        opacity: 0.8,
        [theme.breakpoints.down('sm')]: {
            margin: 10
        }
    },
    errorMessage: {
        textIndent: 50,
        fontFamily: [`'Montserrat', sans-serif`].join(','),
    },


    // TaskList

    appbar: {
        display: 'flex',
        flexDirection: 'row',
    },
    ToDo: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginLeft: 15,
        color: '#b7b7a4',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    title: {
        color:"#b7b7a4",
        [theme.breakpoints.down('sm')]: {
            marginLeft: '-1rem',
        },
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: fade(theme.palette.common.white, 0.15),
        // backgroundColor: fade(theme.palette.common.white, 0.15),
        marginRight: theme.spacing(2),
        marginLeft: '64%',
        height: 40,
        [theme.breakpoints.down('sm')]: {
            // marginLeft: theme.spacing(3),
            width: '45%',
            marginLeft: 2,
        },
    },
    input: {
        backgroundColor: primary,
        border: 'none',
        borderBottom: '1px solid',
        borderBottomColor:'#b7b7a4',
        borderRadius: '10px',
        '&:hover': {
            border: 'none',
            borderBottom: '1px solid #fff',
            borderRadius: '10px',
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    searchIcon: {
        color:"#b7b7a4",
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'none'
    },
    sort: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15,
        // marginLeft:'42%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    sortInput: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        marginLeft: 8,
        borderRadius: 10,
        padding: 5,
        color: primary,
        borderColor: primary,
        backgroundColor: '#000',
        [theme.breakpoints.down('sm')]: {
            padding: 1,
            fontSize: 'small'
        }
    },
    sortName: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        marginTop: 8,
        [theme.breakpoints.down('sm')]: {
            marginTop: 4,
            fontSize: 'small',
        }
    },
    addButton: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        marginLeft: '1.5rem',
        borderRadius: 10,
        [theme.breakpoints.down('sm')]: {
            padding: 1,
            fontSize: 'x-small',
        }
    },
    AddLink: {
        textDecoration: 'none'
    },
    Drawerlink: {
        textDecoration: 'none'
    },
    TableRoot: {
        // border: '1px solid red',
        borderCollapse: 'collapse',
        // backgroundColor: '#fff',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    srno: {
        color:'#b7b7a4',
        border:'1px solid',
        borderColor:primary,
        padding: '7px 5px',
        width:'5rem',
    },
    tasktitle: {
        color:'#b7b7a4',
        border:'1px solid',
        borderColor:primary,
        padding: '5px',
    },
    taskdetails: {
        color:'#b7b7a4',
        border:'1px solid',
        borderColor:primary,
        padding: '5px',
    },
    rootTaskDiv:{
        width:'80%',
        margin:'auto',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            margin:'auto',
        }
    },
    taskCard:{
        borderRadius:"10px",
        width:"40%",
        padding:'0.8rem',
        paddingLeft:'1.5rem',
        backgroundImage: `linear-gradient(to right, #ffcbf2, #f3c4fb, #ecbcfd, #e5b3fe, #e2afff, #deaaff, #d8bbff, #d0d1ff)`,
        margin:"2rem",
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.down('sm')]: {
            width:"100%",
            margin:"0.5rem",
            padding:'5px',
            paddingLeft:'1.5rem',
            
        }
    },
    taskdata2:{
        // display:'flex',
        // flexDirection:'row'
    },
    IconSpan:{
        // justifyContent:'flex-end',
        float:'right'
    },
    select:{
        width:"20rem",
        marginLeft:"50rem",
        backgroundColor:primary,
        color:primary,
        alignSelf:"center",
        justifySelf:'flex-end',
        [theme.breakpoints.down('sm')]: {
            width:"10rem",
            marginLeft:"1rem", 
        }
    },
    


    // AddToDo
    createRootDiv: {
        marginTop: '5%',
        marginRight: 'auto',
        borderRadius: 20,
        width: '60%',
        backgroundColor: innerBG,
        [theme.breakpoints.down('sm')]: {
            marginTop: '4rem',
            paddingTop: '1rem',
            width: '100%',
        }
        // height:'30rem'
    },
    AddHeader: {
        color: primary,
        textIndent: 40,
        paddingTop: '1.5rem',
        marginBottom: '1rem',
        [theme.breakpoints.down('sm')]: {
            textIndent: 5,
            padding: 1,
            fontSize: 'x-large',
        }

    },
    AddTaskForm: {
        display: 'flex',
        flexDirection: 'column'
    },
    TaskTextField: {
        width: '90%',
        textAlign: 'center',
        alignSelf: 'center',
        opacity: 0.8,
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        borderColor: primary,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },

    AddTaskButton: {
        fontFamily: [`'Montserrat', sans-serif`].join(','),
        width: '50%',
        alignSelf: 'center',
        opacity: 0.8,
        margin: '0.5rem',
        [theme.breakpoints.down('sm')]: {
            width: '65%',
            fontSize: 'small',
            marginBottom: '1rem'
        }
    },
    addTaskRoot: {
        display: 'flex',
        flexDirection: 'row',
    },
    AddtaskAsideImg: {
        width: '40%',
        height: '30rem',
        marginLeft: 'auto',
    },
    paper: {
        backgroundColor: '#000',
    },
    List: {
        width: drawerWidth,
        [theme.breakpoints.down('sm')]: {
            width: 160
        }
    },
    drawerMenuIcon: {
        color: primary,

    },
    drawerMenuText: {
        color: primary,
        marginLeft: 0
    }
}))

export { useStyles }
