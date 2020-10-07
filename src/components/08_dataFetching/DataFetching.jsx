import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <h2>
        Fetching data from--
        <a href="https://jsonplaceholder.typicode.com/">"JSON" Placeholder</a>
      </h2>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default DataFetching;
