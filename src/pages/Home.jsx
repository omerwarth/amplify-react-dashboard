import React from 'react'
import { Card } from '../components';
import { useStateContext } from '../contexts/ContextProvider';


const Home = () => {

  const handleClick = () => {
    window.open('https://anishv525.github.io/CoreWordBoard/');
  };

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowarp justify-center">
        <Card name="Default Board" onButtonClick={handleClick} />
      </div>
    </div>
  )
}

export default Home 