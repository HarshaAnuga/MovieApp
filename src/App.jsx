
import { useState } from 'react'
import Search from './components/Search.jsx'

function App() {
  const[searchTerm, setSearchTerm]=useState("");

  return (
    <main>

      <div className="pattern"/>
      <div className="wrapper">
        <header>
           <img src="./hero-img.png" alt="hero poster"></img>
          <h1>Find <span className="text-gradient">movies</span> you'll Enjoy Without Hassle</h1>
        </header>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
    </main>
  )
}

export default App
