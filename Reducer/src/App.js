import React, { useReducer, useEffect } from 'react'
import './App.css';
import axios from 'axios'

const reducer = (state, action) => {
  const message = "Web Page cannot Fetch The data"
  // console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case 'Success':
      return ({
        loading: false,
        data: action.payload,
        error: '',
      })
    case 'Failed':
      return ({
        loading: false,
        data: [],
        error: message
      })
    default:
      return ({ state })
  }

}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { data: [], error: "", loading: true })
  // console.log(data);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:8000/posts")
        .then((response) => {
          console.log(response.data);
          dispatch({ type: 'Success', payload: response.data })
        })
        .catch((error) => {
          dispatch({ type: 'Failed' })
          console.log(error);
        })
    }, 300);
  }, [])

  return (
    <>{
      state.data.map((currElem) => {
        const { title, body, image, id } = currElem;
        return (
          <div key={id} className="post">
            {state.loading ? "Loading......." : ""}
            <span>
              <img src={image} />
              <h1>{title}</h1>
            </span>
            <p>{body}</p>
            {state.error ? state.error : null}
          </div>
        )
      })
    }</>
  )
}

export default App





