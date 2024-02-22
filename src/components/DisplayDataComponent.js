import React, { useState } from "react";
import axios from "axios";
import '../App.css';


const DisplayDataComponent = ({ data, setUpdating, key }) => {
  const [shownButton, setShownButton] = useState(-1)
  const [content, setContent] = useState("")
  const [showInput, setShowInput] = useState(-1)

  const showHideEditButton = (id) => {
    setShownButton(id)
  }

  const showHideInput = (id, content) => {
    setShowInput(id)

    setShownButton(id)

    setContent(content)
  }

  const setNewContent = e => {
    setContent(e.target.value)
  }

  const updateContent = (id) => {
    const newContent = content

    if (!newContent) {
      return
    }

    setUpdating(true)

    const payload = {
      content: newContent
    }

    const url = `http://localhost:8080/api/update/${id}`

    console.log(url)

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.put(url, payload, config).then(response => {
      setUpdating(false)

      setShowInput(-1)
    })
  }

  return (
    <div className="resizable-component">
      {data?.map((item, i) => (
        <div onMouseEnter={showInput !== -1 ? null : () => showHideEditButton(item.id)} onMouseLeave={showInput !== -1 ? null : () => showHideEditButton(-1)} key={item.id + i}>
          <span>{i + 1}.</span>
          <span hidden={showInput === item.id ? true : false}>{item.content}</span>
          <input hidden={showInput === item.id ? false : true} value={content} onChange={(e) => setNewContent(e)} />
          <span>
            <button onClick={() => showHideInput(showInput === -1 ? item.id : -1, item.content)} key={item.id} hidden={shownButton === item.id ? false : true}>Edit</button>
            <button hidden={showInput === item.id ? false : true} onClick={() => updateContent(item.id)}>Update</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default DisplayDataComponent;
