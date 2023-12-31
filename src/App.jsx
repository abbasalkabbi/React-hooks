
import './App.css'
import Callback from './hook/CallBack/Callback'
import Profil from './hook/ContextComp/Profil'
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
    <Callback/>
    <Profil/>
    </div>
  )
}

export default App
