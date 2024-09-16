import React from 'react';
import { useParams } from 'react-router-dom';

const ResourceDetailPage = () => {
  const { id } = useParams(); // get the resource id from route

  return (
    <div>
      <h1>Resource Detail Page</h1>
      <p>Details for resource with ID: {id}</p>
    </div>
  );
};

export default ResourceDetailPage;
