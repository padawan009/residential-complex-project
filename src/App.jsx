import Banks from './components/Sections/Banks/Banks'
import Clusters from './components/Sections/Clusters/Clusters'
import Decoration from './components/Sections/Decoration/Decoration'
import Features from './components/Sections/Features/Features'
import Flats from './components/Sections/Flats/Flats'
import Footer from './components/Sections/Footer/Footer'
import Inteko from './components/Sections/Inteko/Inteko'
import Interior from './components/Sections/Interior-styles/Interior'
import Lobby from './components/Sections/Lobby/Lobby'
import Main from './components/Sections/Main/Main'
import Map from './components/Sections/Map/Map'
import Presentation from './components/Sections/Presentation/Presentation'
import Test from './components/Sections/Test/Test'
import Views from './components/Sections/Views/Views'
import './styles/App.css'

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
