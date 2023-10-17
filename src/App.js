import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { SessionContextProvider } from './context/sessionContext';
import { useMediaQuery } from 'react-responsive'


function App() {

  const esComputadora = useMediaQuery({ query: '(min-width: 1224px)'})
  return (
      <>
         {!esComputadora ? 
        <BrowserRouter>
          <Header />
          <SessionContextProvider>
            <Main />
          </SessionContextProvider>
          <Footer />
        </BrowserRouter>
        :
        <div className="computadora">
        <img src="/fotos/logo.jpg" alt="logo"></img>
        <h2>This app was developped for smaller screens.<br></br>Please open on a mobile phone o tablet</h2>
        <p><a href="https://www.palosantohotel.com">Browse our website </a></p>
        </div>
        }
      </> 
  );
}

export default App;
