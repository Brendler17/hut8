import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/projects';
import { NossaEquipe } from './pages/Nossa-equipe';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/team" element={<NossaEquipe />} />
    </Routes>
  );
}
