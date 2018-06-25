# Todo List

Aplicação de exemplo de utilização do Redux.

## Estrutura

- **SRC**
  - **HTML**
    - template.html => _"Template da aplicação"._
  - **COMPONENTS**
    - **FILTER**
      - filter-link.js => _Componente de apresentação da lista de filtros._
      - index.js => _Componente de filtro dos todos._
    - **FORM**
      - index.js => _Componente de formulário dos todos._
    - **TODOSLIST**
      - index.js => _Componente de lista dos todos._
  - **REDUCERS**
    - **TODOS**
      - action-creators.js => _Funções que retornam o TYPE e o PAYLOAD de cada action do reducer a serem utilizadas pelo dispatch._
      - actions.js => _Contém as constantes com os nomes das ações do reducer._
      - index.js => _Reducer(state e actions)._
      - todos.test.js => _Testes unitários dos reducers._
    - **VISIBILITY-FILTER**
      - _A mesma estrutura do reducer TODOS, porém para o VISIBILITY-FILTER._
    - index.js => _Combina os reducers para a store._
  - app.js => _Componente principal da aplicação._
  - index.js => _Configuração principal da aplicação._
