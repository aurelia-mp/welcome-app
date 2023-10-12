import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { SessionContextProvider } from './context/sessionContext';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <SessionContextProvider>
          <Main />
        </SessionContextProvider>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
