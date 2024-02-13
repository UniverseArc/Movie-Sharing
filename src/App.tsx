import './App.css'
import TimeBar from './components/TimeBar/TimeBarVariants/TimeBar'
import { TimeBarsVariant } from './components/TimeBar/TimeBarVariants/types/TimeBars.types'

function App() {

  return (
    <div>
      <TimeBar variant={TimeBarsVariant.primary} time={{hours: 13, minutes: 15}}/>
      <TimeBar variant={TimeBarsVariant.fullfiledRed} time={{hours: 13, minutes: 15}}/>
      <TimeBar variant={TimeBarsVariant.outlinedRed} time={{hours: 13, minutes: 15}}/>
    </div>
  )
}

export default App
