import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ChatBubble } from './components/ui/ChatBubble';
import HomePage from './pages/Home';
import LaFirmaPage from './pages/LaFirma';
import AreasPracticaPage from './pages/AreasPractica';
import HubInversionPage from './pages/HubInversion';
import SimuladorPage from './pages/Simulador';
import NoticiasPage from './pages/Noticias';
import ContactoPage from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/la-firma" element={<LaFirmaPage />} />
        <Route path="/areas-practica" element={<AreasPracticaPage />} />
        <Route path="/hub-inversion" element={<HubInversionPage />} />
        <Route path="/simulador" element={<SimuladorPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        {/* Redirects para URLs anteriores */}
        <Route path="/proyectos" element={<Navigate to="/hub-inversion" replace />} />
        <Route path="/servicios" element={<Navigate to="/hub-inversion" replace />} />
      </Routes>
      <Footer />
      <ChatBubble />
    </BrowserRouter>
  );
}

export default App;
