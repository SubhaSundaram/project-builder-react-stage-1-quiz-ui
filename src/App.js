import './App.css'
import './components/HomeComponent.css'
import './components/QuizComponent.css'
import './components/ResultComponent.css'
import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'

function App() {
  return (
    <div className="App">
      <HomeComponent />
      <QuizComponent />
      <ResultComponent />
    </div>
  )
}
export default App
