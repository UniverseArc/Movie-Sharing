import './App.css'
import DatePicker from './components/DatePicker/DatePickerVariants/DatePicker'
import { DatePickerVariant } from './components/DatePicker/DatePickerVariants/types/DatePicker.types'

function App() {

  return (
    <div>
        <DatePicker variant={DatePickerVariant.primaryPicked} date={24}/>
        <DatePicker variant={DatePickerVariant.redPicked} date={24}/>
    </div>
  )
}

export default App
