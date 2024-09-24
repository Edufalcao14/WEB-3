import { useState } from 'react'


export default function ClickCounter({titre, phrase , phrase2}) {
    const [count, setCount] = useState(0)

    const [isEntered, setPhraseState] = useState(false)
    return (
        <div className="card">
            <h1>{titre}</h1>
        <button onClick={() => setCount((count) => count + 1)} onMouseEnter={()=>setPhraseState(true)} onMouseLeave={()=>setPhraseState(false)}>
          count is {count}
          {isEntered ? <p>{phrase2}</p> : null}
        </button>
        {count > 10 ? <p>{phrase}</p> : null}
      </div>
    );
}
