import {useState, useEffect} from 'react';

const useCounter = (forwards = true) => { // = standard value; could also put the function prevCounter as a parameter, would be more flexible
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1); // would put the name of the function here, with parenthesis, and without them on the beginning of the function
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

      return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;