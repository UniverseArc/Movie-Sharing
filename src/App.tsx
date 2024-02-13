import './App.css'
import ListMarker from './components/ListMarker/ListMarkerVariants/ListMarker'
import ListMarkerGray from './components/ListMarker/ListMarkerVariants/ListMarkerGray'
import ListMarkerRed from './components/ListMarker/ListMarkerVariants/ListMarkerRed'
import ListMarkerRedOutlined from './components/ListMarker/ListMarkerVariants/ListMarkerRedOutlined'
import { ListMarkerVariant } from './components/ListMarker/ListMarkerVariants/types/ListMarker.types'

function App() {

  return (
    <div>
      <ListMarker variant={ListMarkerVariant.primary}/>
      <ListMarker variant={ListMarkerVariant.fullfiledRed}/>
      <ListMarker variant={ListMarkerVariant.outlinedRed}/>

      {/* <ListMarkerRed variant={ListMarkerVariant.fullfiledRed}/>
      <ListMarkerGray variant={ListMarkerVariant.primary}/>
      <ListMarkerRedOutlined variant={ListMarkerVariant.outlinedRed} /> */}
    </div>
  )
}

export default App
