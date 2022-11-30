import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from './pages/Forms/Forms';
import Menu from './pages/Menu/Menu';
function App() {

  return (
    <div className="App">
      <Router>
       <Menu/>
        <Routes>
          <Route index element={<Forms />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
