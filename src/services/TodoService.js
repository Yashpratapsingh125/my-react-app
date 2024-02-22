// Import statements
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// Functional component
function ApiComponent() {
  // State variables
  const [data, setData] = useState(null);
  const [postData, setPostData] = useState({});
  const [putData, setPutData] = useState({});

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data
  const fetchData = () => {
    // Using fetch API
    fetch('http://localhost:8080/api/contents')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));

    // Using axios
    // axios.get('https://api.example.com/data')
    //   .then(response => setData(response.data))
    //   .catch(error => console.error('Error fetching data:', error));
  };

  // Function to handle POST request
  const handlePostRequest = () => {
    // Using fetch API
    fetch('http://localhost:8080/api/contents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error posting data:', error));

    // Using axios
    // axios.post('https://api.example.com/postData', postData)
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error('Error posting data:', error));
  };

  // Function to handle PUT request
  const handlePutRequest = () => {
    // Using fetch API
    fetch('https://api.example.com/updateData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(putData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error updating data:', error));

    // Using axios
    // axios.put('https://api.example.com/updateData', putData)
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error('Error updating data:', error));
  };

  return (
    <div>
      {/* Display fetched data */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      {/* Form to update postData */}
      <input
        type="text"
        value={postData}
        onChange={e => setPostData(e.target.value)}
      />
      <button onClick={handlePostRequest}>Submit POST Request</button>

      {/* Form to update putData */}
      <input
        type="text"
        value={putData}
        onChange={e => setPutData(e.target.value)}
      />
      <button onClick={handlePutRequest}>Submit PUT Request</button>
    </div>
  );
}

// Export the component
export default ApiComponent;
