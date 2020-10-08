import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [load, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError('Something Wrong');
      });
  });
  return (
    <div>
      <h2>{load ? 'Loading...' : post.title}</h2>
      {error}
    </div>
  );
}

export default DataFetching;
