import { useState } from 'react';
import './App.css';
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const handleDecrement = () => {
    setCount(count - 1);
  }
  const handleReset = () => {
    setCount(0);
  }
  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div className='container'>
        <header className='header'>
          <h1>Contador:</h1>
        </header>

        <aside className='aside'>
          <h2>{count}</h2>  
        </aside>  
          
        <footer className='footer'>
          <Button onClick={handleDecrement}>{"<"} Contador</Button>

          <Button onClick={handleReset}>Reset</Button>

          <Button onClick={handleIncrement}>Contador {">"}</Button>
        </footer>
      </div>
    </>
  );
}

export default App;
