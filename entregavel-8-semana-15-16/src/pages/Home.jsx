import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo ao Projeto Final React</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Arquitetura escalável utilizando React Router, Tailwind CSS, Context API (Tema Claro/Escuro persistido no localStorage) e camada de serviço de API.
      </p>
      <Card titulo="Comece a explorar">
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          Acesse a página de catálogo para visualizar os dados consumidos em tempo real da API pública.
        </p>
        <Link to="/catalogo" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
          Abrir Catálogo da API
        </Link>
      </Card>
    </div>
  );
}
