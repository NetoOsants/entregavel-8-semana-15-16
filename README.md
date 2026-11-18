# Entregável 1 – Fundamentos de React e Componentes (Semana 08)

Aplicação React estruturada com Vite e componentes funcionais (`Header`, `Footer`, `Card`, `Lista` e `App`).

## Parte 4 – Reflexão (Para Pensar)

**Explique a diferença entre a abordagem imperativa (JavaScript puro/manipulação do DOM) e a declarativa (React). Por que o Virtual DOM otimiza a performance?**

- **Abordagem Imperativa (JavaScript puro):** Nós precisamos dizer ao navegador **passo a passo como** alterar a tela (selecionar o elemento com `document.getElementById`, criar tags manualmente, alterar o texto e inserir no DOM).
- **Abordagem Declarativa (React):** Nós apenas declaramos **o que** queremos ver na tela para cada estado dos dados (usando JSX), e o próprio React cuida de atualizar a interface automaticamente.
- **Por que o Virtual DOM otimiza a performance:** Alterar o DOM real do navegador diretamente várias vezes é lento e custoso. O React mantém uma cópia leve da tela na memória (o Virtual DOM), compara o que mudou (processo chamado *reconciliação* ou *diffing*) e atualiza no DOM real **apenas os elementos exatos que sofreram alteração**, evitando recarregar a página inteira.
