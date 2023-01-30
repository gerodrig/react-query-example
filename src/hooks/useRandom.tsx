import { useQuery } from '@tanstack/react-query';

const getRandomNumberFromApi = async (): Promise<number> => {
    const result = await fetch(
      'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
    );
    const numberString = await result.text();
  
    // throw new Error('Something went wrong');
    return +numberString;
  };

export const useRandom = () => {

    const query = useQuery(['randomNumber'], getRandomNumberFromApi,{
        retry: 1,
      });

    return query;
};