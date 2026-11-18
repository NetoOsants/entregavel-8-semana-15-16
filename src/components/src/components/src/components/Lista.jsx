export default function Lista({ itens }) {
  return (
    <section className="secao-lista">
      <h3>Tecnologias Estudadas:</h3>
      <ul className="lista-itens">
        {itens.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
