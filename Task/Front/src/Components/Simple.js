// import React, { useState, useRef } from 'react'
// const Simple = props => {
//     const [user, setUser] = useState({
//         name: '',
//         email: '',
//     })
    // const form = useRef(null)
    // const form1 = useRef(null)
    // const form2 = useRef(null)
    // const submit = e => {
        // console.log(form1.current);
    //     e.preventDefault()
    //     const data = new FormData(form.current)
    //     // console.log(form.current[name]);
    //     // console.log(data);
    //     data.append(form1)
    //     fetch('/api', { method: 'POST', body: data })
    //         .then((res) => { 
    //             res.json();
    //             // console.log(res.json);
    //          })
    //         .then((json) => {
    //             // console.log(json);
    //             // setUser(json.user)
    //         })

    // }

//     return (
//         <form  onSubmit={submit}>
//             <input type="text" name="user[name]" defaultValue={user.name} ref={form1}/>
//             {/* {user.errors.name && <p>{user.errors.name}</p>} */}

//             <input type="email" name="user[email]" defaultValue={user.email} ref={form2}/>
//             {/* {user.errors.email && <p>{user.errors.email}</p>} */}

//             <input type="submit" name="Sign Up" />
//         </form>
//     )
// }
// export default Simple