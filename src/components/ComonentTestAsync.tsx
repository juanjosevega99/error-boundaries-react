import { useEffect, useState } from 'react';
import { ErrorBoundary } from '../utilities';

function componentTestAsync() {
  const [result, setResult] = useState();
  const [error, setError] = useState<boolean>(false);

  let url = 'https://rickandmortyapi.com/api/characters/1";';
  const fetchRickAndMorty = async () => {
    const response = await fetch(url)
      .then(r => {
        if (r.status !== 200) throw new Error('Error');
        setError(false);
        return r;
      })
      .catch(error => {
        setError(true);
        url = 'https://rickandmortyapi.com/api/character/1';
        throw new Error(error);
      });

      const data = await response.json()
      setResult(data)
  };

  useEffect(() => {
    fetchRickAndMorty()
    setTimeout(() => {
      fetchRickAndMorty()
    }, 3000)
  }, [])

  return (
    <ErrorBoundary
      fallBackComponent={<>Is not working</>}
      resetCondition={result}
      error={error}
    >
      <div>{JSON.stringify(result)}</div>
    </ErrorBoundary>
  )
}

export default componentTestAsync;
