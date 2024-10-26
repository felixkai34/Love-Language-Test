import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/quiz" element={<Quiz/>} />
    		</Routes>
		</>
	)
}

export default App