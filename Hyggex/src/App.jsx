import './App.css'
import NavBar from './components/NavBar'
import FlashCard from './components/FlashCard'
import { Route, Routes } from 'react-router'
import Study from './partials/Study'
import Quiz from './partials/Quiz'
import Test from './partials/Test'
import Game from './partials/Game'
import Other from './partials/Other'
import Home from './components/Home'
import Contact from './components/Contact'
import Faq from './components/Faq'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<FlashCard/>}>
        <Route path="/" element={<Study/>}/>
        <Route path="/quiz" element={<Quiz/> }/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/other" element={<Other/>}/>
      </Route>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/faq" element={<Faq/>}/>
    </Routes>
    </>
  )
}

export default App
