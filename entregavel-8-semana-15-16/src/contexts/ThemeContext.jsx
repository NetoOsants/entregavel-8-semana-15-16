import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem('tema_preferido') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('tema_preferido', tema);
  }, [tema]);

  function alternarTema() {
    setTema((atual) => (atual === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      <div className={tema === 'dark' ? 'dark bg-slate-900 text-slate-100 min-h-screen' : 'bg-slate-50 text-slate-900 min-h-screen'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
