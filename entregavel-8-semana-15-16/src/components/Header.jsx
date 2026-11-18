import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Button from './Button';

export default function Header() {
  const { tema, alternarTema } = useTheme();

  const linkClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800'
    }`;

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg"> Catálogo React Pro</span>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/catalogo" className={linkClass}>Catálogo API</NavLink>
          <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
          <Button variant="outline" onClick={alternarTema}>
            {tema === 'light' ? '🌙 Tema Escuro' : '☀️ Tema Claro'}
          </Button>
        </nav>
      </div>
    </header>
  );
}
