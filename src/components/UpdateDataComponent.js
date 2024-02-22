import React, { useState } from 'react';
import axios from 'axios';

const UpdateDataComponent = ({editId, content, handleUpdate, setContent}) => {
  const [id, setId] = useState('');


  return (
    <div>
      <h2>Update Data</h2>
      <input
        type="text"
        value={editId}
        onChange={e => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <input
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Enter new content"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateDataComponent;
