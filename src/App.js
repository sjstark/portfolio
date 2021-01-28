import { useState } from 'react'
import String from './components/String'

function App() {
  const [lights, setLights] = useState(false)

  return (
    <div style={{ background: 'white', width: '100vw', height: '100vh' }}>
      <String />
    </div>
  );
}

export default App;
