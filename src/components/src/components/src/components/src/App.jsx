import Header from './components/Header';
import Card from './components/Card';
import Lista from './components/Lista';
import Footer from './components/Footer';

export default function App() {
  const tecnologias = [
    'HTML5 e CSS3',
    'JavaScript ES6+',
    'React e JSX',
    'Componentes Funcionais e Props'
  ];

  return (
    <>
      <Header />
      <main className="conteudo-principal">
        <Card
          titulo="Componentes Reutilizáveis"
          descricao="Este card recebe título e descrição dinamicamente via props."
        />
        <Card
          titulo="Virtual DOM e JSX"
          descricao="O React atualiza apenas o que muda na interface de forma declarativa."
        />
        <Lista itens={tecnologias} />
      </main>
      <Footer />
    </>
  );
}
