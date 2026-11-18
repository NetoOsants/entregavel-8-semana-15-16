import Card from '../components/Card';

export default function Sobre() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Sobre a Arquitetura do Projeto</h1>
      <Card titulo="Organização em Camadas">
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li><strong>components/</strong>: Botões, Cards, Header, Footer e Layout reutilizáveis.</li>
          <li><strong>pages/</strong>: Telas conectadas ao React Router (Home, Catálogo, Sobre).</li>
          <li><strong>services/</strong>: Comunicação isolada com a API externa (fetch).</li>
          <li><strong>contexts/ e hooks/</strong>: Gerenciamento global do Tema Claro/Escuro com localStorage.</li>
        </ul>
      </Card>
    </div>
  );
}
