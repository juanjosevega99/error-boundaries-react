import './App.css'
import { ComponentTest } from './components'
import { ErrorBoundary } from './utilities'

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallBackComponent={<>Is not working</>}>
        <ComponentTest name='Juan'/>
      </ErrorBoundary >
    </div>
  )
}

export default App
