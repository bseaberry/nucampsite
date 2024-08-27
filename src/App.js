import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';
import CampsitesList from './features/counter/campsites/CampsitesList.js';
import { CAMPSITES } from './app/shared/CAMPSITES.js';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList campsite={CAMPSITES[0]} />
      <Footer />
    </div>
  );
}

export default App;
