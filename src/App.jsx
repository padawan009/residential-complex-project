import Banks from './features/Banks/Banks'
import Clusters from './features/Clusters/Clusters'
import Decoration from './features/Decoration/Decoration'
import Features from './features/Features/Features'
import Flats from './features/Flats/Flats'
import Footer from './components/layout/Footer/Footer'
import Inteko from './features/Inteko/Inteko'
import Interior from './features/InteriorStyles/Interior'
import Lobby from './features/Lobby/Lobby'
import Main from './features/Main/Main'
import Map from './features/Map/Map'
import Presentation from './features/Presentation/Presentation'
import Test from './features/Test/Test'
import Views from './features/Views/Views'
import './assets/styles/App.css'
import './assets/styles/fonts.css'

function App() {
  return (
  <>
    <Main />
    <Features />
    <Map />
    <Views />
    <Presentation />
    <Clusters />
    <Lobby />
    <Flats />
    <Test /> 
    <Decoration />
    <Interior />
    <Inteko />
    <Banks />
    <Footer />
    </>
  )
}

export default App
