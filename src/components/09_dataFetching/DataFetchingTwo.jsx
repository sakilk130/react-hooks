import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingTwo() {
  const [posts, setPost] = useState([0]);
  const [id, setId] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <h2>
        Fetching data from--
        <a href="https://jsonplaceholder.typicode.com/">"JSON" Placeholder</a>
      </h2>

      <input
        type="text"
        placeholder="search id...."
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      {posts.title ? (
        <ul>
          <li>
            <h3>{posts.title}</h3>
            <p>{posts.body}</p>
          </li>
        </ul>
      ) : (
        false
      )}
    </div>
  );
}

export default DataFetchingTwo;
