import React, { useState, useEffect } from 'react';
import DisplayDataComponent from './components/DisplayDataComponent';
import axios from 'axios';

const App = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  // CODE 
  const [content, setContent] = useState('');
  const [column, setColumn] = useState(1)
  const [contentError, setContentError] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [data, setData] = useState([])

  const setWindow = (e) => {
    setColumn(e.target.value)
  }

  const handleContentChange = e => {
    setContent(e.target.value)
    if (e.target.value.length) {
      setContentError(false)
    } else {
      setContentError(true)
    }
  }

  // Function to handle POST request
  const addContent = () => {
    // Using fetch API
    if (!content) {
      setContentError(true)
      return
    }

    setUpdating(true)

    const payload = {
      content,
      window: column
    }

    setContent("")

    const url = 'https://nodejs-projects-1.onrender.com/api/add'

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.post(url, payload, config).then(response => setUpdating(false))
  }

  //Function to fetch data
  const fetchData = () => {
    axios.get("https://nodejs-projects-1.onrender.com/api/")
      .then(({ data }) => {
        console.log(data)
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    fetchData()
  }, [updating])

  return (
    <div>
      <h1>Data Management App</h1>
      <div>
        <textarea value={content} onChange={handleContentChange}/>
        <span hidden={!contentError}>Content is required</span>
        <br></br>

        <select value={column} onChange={setWindow}>
          <option value={1}>window 1</option>
          <option value={2}>window 2</option>
          <option value={3}>window 3</option>
        </select>

        <button onClick={addContent} disabled={updating}>Add</button>
      </div>

      <div style={containerStyle}>
        {data?.result?.map((col, i) => <DisplayDataComponent setUpdating={setUpdating} data={col} key={i} />)}
      </div>
    </div>
  );
};

export default App;