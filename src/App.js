import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  const [page, setPage] = useState(null)

  useEffect(() => {
    console.log(page)
  }, [page])

  const handlePageChange = (number) => {
    setPage(number)
  }

  return (
    <>
      {/* <Navbar /> */}

      {/* <Intro /> */}
      <About />
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}

    </>
  );
}

export default App;
