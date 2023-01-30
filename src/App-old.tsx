import { useEffect, useReducer, useState } from 'react';
import './App.css';

const getRandomNumberFromApi = async (): Promise<number> => {
  const result = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  );
  const numberString = await result.text();

  return +numberString;
  //throw new Error('Something went wrong');
};

export const App = () => {
  const [number, setNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [ key , forceRefetch ] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setLoading(true);
    getRandomNumberFromApi()
      .then(setNumber)
      .catch((error) => setError(error.message));
  }, [key]);

  useEffect(() => {
    if (number) {
      setLoading(false);
    }
  }, [number]);

  useEffect(() => {
    if (error) {
      setLoading(false);
    }
  }, [error]);

  return (
    <div className="App App-header">
      {loading ? <h2>Loading...</h2> : !error && <h2> Random Number: {number} </h2>}
      {!loading && error && <h3>{error}</h3>}
      <button style={{background: 'blue'}} disabled={loading} onClick={forceRefetch}>Generate Random Number</button>
    </div>
  );
};

export default App;
