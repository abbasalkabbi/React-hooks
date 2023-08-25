
import './App.css'
import Effect from './hook/Effect'
import Memo from './hook/Memo'
import Ref from './hook/Ref'
import State from './hook/state'
function App() {
  return (
    <div className='App bg-dark'>
    <State/>
    <Effect/>
    <Ref/>
    <Memo/>
    </div>
  )
}

export default App
