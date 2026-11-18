export async function buscarListaPokemons(limite = 6) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limite}`);
  if (!response.ok) {
    throw new Error('Erro ao carregar dados da API');
  }
  const data = await response.json();
  return data.results;
}
