export default function Button({ children, onClick, variant = 'primary' }) {
  const estilos = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'border border-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800',
  };
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${estilos[variant] || estilos.primary}`}
    >
      {children}
    </button>
  );
}
