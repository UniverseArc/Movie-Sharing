import './App.css'
import { ApplyButton } from './components/ApplyButton/ApplyButton'
import { EApplyButtonStyles } from './components/ApplyButton/types/ApplyButton.types'

function App() {

  return (
    <div>
        <ApplyButton buttonStyle={EApplyButtonStyles.Green} />
    </div>
  )
}

export default App
