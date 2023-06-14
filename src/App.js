import React, { useState, useTransition } from 'react';
import { counter } from './countert';

import spinner from "./gif/spinner.gif"

const App = () => {

  const [state , setState] = useState()
  const [numbers, setNumbers] = useState([])
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {

    const { value } = event.target;
    setState(value)
    startTransition(() => {
      setNumbers(counter(value))
    })
  }

  return (
    <div>
      <input value={state} type="text" onChange={changeHandler} />
      {!isPending ? numbers.map((number) => <p>{number}</p>) : <h1><img src={ spinner } /></h1>}
    </div>
  );
};

export default App;