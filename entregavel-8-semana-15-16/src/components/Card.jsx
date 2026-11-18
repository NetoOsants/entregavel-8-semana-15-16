export default function Card({ titulo, children }) {
  return (
    <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
      <h3 className="font-bold text-lg mb-2 capitalize">{titulo}</h3>
      {children}
    </div>
  );
}
