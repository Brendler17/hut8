import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NossaEquipe } from './pages/Nossa-equipe';
import { Projects } from './pages/projects';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/team" element={<NossaEquipe />} />
    </Routes>
  );
}
