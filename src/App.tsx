import './App.css'
import { ComponentTest } from './components'
import ComponentTestAsync from "./components/ComonentTestAsync";

function App() {
  return (
    <div className="App">
      <ComponentTestAsync />
      <ComponentTest name='Juan' />
    </div>
  )
}

export default App
