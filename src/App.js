import { useState } from 'react'
import String from './components/String'

function App() {
  const [lights, setLights] = useState(false)

  return (
    <div>
      <String />
    </div>
  );
}

export default App;
