import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { useRandom } from './hooks/useRandom';



export const App = () => {

  const query = useRandom();

  return (
    <div className="App App-header">
      {query.isFetching ? (
        <h2>Loading...</h2>
      ) : (
        !query.isError && <h2> Random Number: {query.data} </h2>
      )}
      {!query.isLoading && query.isError && <h3>{ `${ query.error }` }</h3>}
      <button
        style={{ background: 'blue' }}
        disabled={query.isFetching}
        onClick={() => query.refetch()}>
        {query.isFetching ? '...' : 'New Number'}
      </button>
    </div>
  );
};

export default App;
