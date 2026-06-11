import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ChatBubble } from './components/ui/ChatBubble';
import HomePage from './pages/Home';
import LaFirmaPage from './pages/LaFirma';
import AreasPracticaPage from './pages/AreasPractica';
import ProyectosPage from './pages/Proyectos';
import ServiciosPage from './pages/Servicios';
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
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
      <Footer />
      <ChatBubble />
    </BrowserRouter>
  );
}

export default App;
