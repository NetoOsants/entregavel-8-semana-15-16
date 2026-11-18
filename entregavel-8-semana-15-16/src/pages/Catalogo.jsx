import { useState, useEffect } from 'react';
import { buscarListaPokemons } from '../services/api';
import Card from '../components/Card';

export default function Catalogo() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    buscarListaPokemons(9)
      .then((dados) => setItens(dados))
      .catch((err) => setErro(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="font-medium text-blue-600">Carregando catálogo da API...</p>;
  if (erro) return <p className="text-red-600 font-medium">{erro}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Catálogo Integrado via Service API</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {itens.map((item, idx) => (
          <Card key={item.name} titulo={`${idx + 1}. ${item.name}`}>
            <p className="text-xs text-slate-500 break-all">{item.url}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
