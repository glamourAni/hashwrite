import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import LogIn from "./pages/LogIn"
import Signup from "./pages/Signup"

const App = () => {
	return (
		// <>
		// 	<Home />
		// </>

		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
