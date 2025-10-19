import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  const movieCount = 1;

  console.log("App Component Rendered with movieCount:", movieCount);


  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>
  )
}

export default App
