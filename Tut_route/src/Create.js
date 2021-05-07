import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [pending, setPending] = useState(false);
    const history = useHistory();

    const AddChar = (e) => {
        e.preventDefault();
        const post = {
            title, body, image
        }
        console.log(post);
        setPending(true)
        axios.post('http://localhost:8000/posts', post)
            .then((response) => {
                console.log("New Character Added Successfully.😁");
                setPending(false);
                history.push('/')
            })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <div className="create">
            <h1>Create New Character</h1>

            <form onSubmit={AddChar}>
                <input type="text" name="title"
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }} />

                <textarea name="body" rows="10" required
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }} />

                <input type="text" name="image" required
                    value={image}
                    onChange={(e) => { setImage(e.target.value) }} />

                {!pending && <button type="submit">Add Character</button>}
                {pending && <button type="submit" disabled>Adding the Character</button>}
            </form>
        </div>
    )
}

export default Create
