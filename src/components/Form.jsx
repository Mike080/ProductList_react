import React, { useState } from 'react';
import axios from '../api/index';

export default function Form() {
  const [data, setData] = useState({
    username: '',
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: data.username,
    };
    axios
      .post('/api/register', userData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log('server responded');
        } else if (error.request) {
          console.log('network error');
        } else {
          console.log(error);
        }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input
          type="username"
          name="username"
          className="form-control"
          placeholder="Enter email"
          value={data.username}
          onChange={handleChange}
        />
        {/* */}
      </div>
      <div className="form-group">
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
