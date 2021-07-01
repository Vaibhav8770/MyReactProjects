import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TutorialDataService from '../Fetch/services/TutorialService'

const useTask = (TaskValidation) => {
    const [task, setTask] = useState({
        tasktitle: '',
        taskdetails: ''
    })
    const [taskerror, setTaskerror] = useState({})
    const [action, setAction] = useState(false)
    const history = useHistory();

    const handleTask = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
        // console.log(task);
    }
    const handlePopUp = (e) => {
        e.preventDefault();
        setTaskerror(TaskValidation(task));
        console.log(taskerror);
        if (Object.values(taskerror).length === 0) {
            // setAction(false);
            console.log(Object.values(taskerror));
            setAction(true);
        }
    }

    const handleClose = () => {
        setAction(false);
    }

    const handleSubmit = () => {
        setAction(false);
        const { tasktitle, taskdetails } = task

        TutorialDataService.create('/tasks/create', { tasktitle, taskdetails })
            .then((res) => { console.log(res); })
            .catch((error) => { console.log(error); })
        history.push('/Tasklist');
    }

    return { handleTask, handlePopUp, handleClose, handleSubmit, task, taskerror, action }
}

export default useTask