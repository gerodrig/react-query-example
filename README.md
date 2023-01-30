<p align="center">
  <a href="https://tanstack.com/query/latest/docs/react/installation" target="blank"><img src="src/assets/react-query.svg" width="200" alt="ReactQuery Logo" /></a>
</p>


# ReactQuery Example

This project is a basic example on how to use ReactQuery, also known as Tansack Query, in a React application.

<br /> 
<br /> 


## What is ReactQuery?
ReactQuery is a library that allows you to manage and share the state of your application with ease. It is designed to make it simple to fetch data, handle loading and error states, and keep your UI in sync with your data.
<br /> 
<br /> 
## How does it work?
ReactQuery uses the concept of queries to manage your data. You define a query for each piece of data that you want to fetch, and ReactQuery takes care of the rest.

The queries are fully managed, meaning that ReactQuery will automatically refetch the data when it becomes stale or if a network error occurs. It also makes it easy to cache and share data between components, so you don't have to worry about duplicating requests.
<br /> 
<br /> 
## Benefits of using ReactQuery
Simplifies data management
Automatically handles loading and error states
Easy to cache and share data between components
Minimizes the need for manual data management logic
<br /> 
<br /> 
## Example Usage
In this example project, we fetch data from a JSON placeholder API and display it in a table.

```
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const DataTable = () => {
  const { data, status } = useQuery('posts', fetchData);

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error!</div>}
      {status === 'success' && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;
```
</br>
</br>

# Conclusion
This is just a basic example of how to use ReactQuery, but it demonstrates how easy it is to fetch and manage data in your React applications. By using ReactQuery, you can simplify data management, minimize the need for manual data management logic, and keep your UI in sync with your data.