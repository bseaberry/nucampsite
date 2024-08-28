import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js';


function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
