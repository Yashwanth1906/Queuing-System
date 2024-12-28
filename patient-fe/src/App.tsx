import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import RegisterPage from './pages/Signup'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/Home'

function App() {
	return(




	<BrowserRouter>
		<Routes>

			<Route path="/" element={<Landing />}></Route>
			<Route path="/register" element={<RegisterPage />}></Route>		
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/home" element={<HomePage />}></Route>
		</Routes>




	</BrowserRouter>

)


}
export default App
