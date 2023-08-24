import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './Nav'
import Home from './Home'

function App() {
  return (
    <>
      <h1>Welcome to NookBnb</h1>
      <p>Coming Soon!</p>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
