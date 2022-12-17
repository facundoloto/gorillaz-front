import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import { Header } from './components/Header/Header.jsx'
import { NavbarGorillaz } from './components/Nav/Nav.jsx';
import { Footer } from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <>
      <NavbarGorillaz />
      <Header />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App
