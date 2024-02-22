import React, { useState } from 'react';
import axios from 'axios';

const AddDataComponent = () => {
  const [content, setContent] = useState('');

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:8080/api/add', { content });
      setContent('');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <h2>Add Data</h2>
      <input
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Enter Content"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddDataComponent;
