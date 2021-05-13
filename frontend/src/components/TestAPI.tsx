// import React from 'react'
import {useState} from 'react'
import axios from 'axios'

const TestAPI = () => {
  const [responseText, setResponseText] = useState("No results")
  const [error, setError] = useState(null)

  const handleClick = (e) => {
    e.preventDefault()
    fetchData()
  }

  const fetchData = async () => {
    const url = 'http://localhost:3001/api/test'
    await axios.get(url, {
      headers: {
        // Authorization: 'authString'
      },
      params: {
      }
    })
    .then(response => {
      if (response.status === 200) {
        setResponseText(response.data.message)
      } else {
        throw Error("Error fetching test")
      }
    })
    .catch(err => setError(err))
  }

  if (error) {
    return <p id="error" className="errorClass">{ error.message }</p>
  }

  return <div>
    <p id="testText">{responseText}</p>   
    <button 
      type="button" 
      // onClick={handleClick} 
      onClick={e => handleClick(e)}
      value=""
      className="btn btn-primary">click to test api
    </button>
  </div>
}

export default TestAPI