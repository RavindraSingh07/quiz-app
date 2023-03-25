import Quiz from "./components/Quiz";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import Question from "./components/Question";
function App() {
  return (
    <div className="App bg-blue-100 min-h-[100vh]">

      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/:name" element={<Question/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
