
import './App.css'
import { RegisterComponent } from './pages/Doctor/register'
import { SigninDoctor } from './pages/Doctor/signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {RecoilRoot } from "recoil"
import { DoctorDashBoard } from './pages/Doctor/dashboard'
import { Register } from './pages/Admin/register';
import {Admindashboard} from './pages/Admin/dashboard';
import {InventoryLogin} from './pages/inventory/login';
import { InventoryRegister } from './pages/inventory/register';
import {MainStore} from './pages/inventory/mainstore';
import { Substore } from './pages/inventory/substore';
import { Pharmacy } from './pages/inventory/pharmacy';
import { Ward } from './pages/inventory/ward';
import { DoctorConsultancy } from './pages/Doctor/doctorConsultancy'
import path from 'path'
import {PatientDashboard} from './pages/patients/patientsdash'
import { HomePageComponent } from './pages/LandingPage'
import { AdminSigninPage } from './pages/Admin/signin'
import { PatientLogin } from './pages/patients/patientslogin'

function App() {

  return (
    <>
      <RecoilRoot>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent />}></Route>
          <Route path="/doctorssignup" element={<RegisterComponent/>}></Route>
          <Route path="/doctorssignin" element={<SigninDoctor />}></Route>
          <Route path="/doctordashboard" element={<DoctorDashBoard/>}></Route>
          <Route path="/adminsignin" element={<AdminSigninPage/>}/>
          <Route path="/doctorconsultancy" element={<DoctorConsultancy/>}/>
          <Route path="/adminsignup" element={<Register/>}/>
          <Route path="/admindashboard" element={<Admindashboard/>}/>
          <Route path="/inventorysignin" element={<InventoryLogin/>}/>
          <Route path="/inventorysignup" element={<InventoryRegister/>}/>
          <Route path="/mainstore" element={<MainStore/>}/>
          <Route path="/substore" element={<Substore/>}/>
          <Route path="/patientdashboard" element={<PatientDashboard/>}/>
          <Route path="/pharmacy" element={<Pharmacy/>}/>
          <Route path="/ward" element={<Ward/>}/>
          <Route path='/patientlogin' element={<PatientLogin/>}/>
        </Routes>
      </BrowserRouter>

    </RecoilRoot>
    </>
  )
}

export default App
