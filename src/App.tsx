import './App.css'
import BoxListMarker from './components/BoxListMarker/BoxListMarkerVariants/BoxListMarker'
import { BoxListMarkerVariant } from './components/BoxListMarker/BoxListMarkerVariants/types/BoxListMarker.types'


function App() {

  return (
    <div>
        <BoxListMarker variant={BoxListMarkerVariant.primaryGray}/>
        <BoxListMarker variant={BoxListMarkerVariant.outlinedGreen}/>
        <BoxListMarker variant={BoxListMarkerVariant.greenInGray}/>

    </div>
  )
}

export default App
