import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="mb-4">Photo Gallery Home</h1>
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        <Link className="btn btn-danger" to="/village">Village</Link>
        <Link className="btn btn-warning" to="/city">City</Link>
        <Link className="btn btn-success" to="/animal">Animal</Link>
        <Link className="btn btn-primary" to="/bird">Bird</Link>
      </div>
    </div>
  );
};

export default Home;
