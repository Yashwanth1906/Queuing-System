import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {RecoilRoot } from "recoil"
import { HomePage } from './pages/home'
import { HospitalDetailsPage } from './pages/hospital'
function App() {

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/hospital/:id' element={<HospitalDetailsPage/>}/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
