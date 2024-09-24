import { useState } from 'react'


export default function ClickCounter() {
    const [count, setCount] = useState(0)
    return (
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
}