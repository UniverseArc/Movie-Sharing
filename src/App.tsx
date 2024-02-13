import './App.css'
import ListMarkerGray from './components/ListMarker/ListMarkerVariants/ListMarkerGray'
import ListMarkerRed from './components/ListMarker/ListMarkerVariants/ListMarkerRed'
import ListMarkerRedOutlined from './components/ListMarker/ListMarkerVariants/ListMarkerRedOutlined'
import { ListMarkerVariant } from './components/ListMarker/ListMarkerVariants/types/ListMarker.types'

function App() {

  return (
    <div>
      <ListMarkerRed variant={ListMarkerVariant.fullfiledRed}/>
      <ListMarkerGray variant={ListMarkerVariant.primary}/>
      <ListMarkerRedOutlined variant={ListMarkerVariant.outlinedRed} />
    </div>
  )
}

export default App
