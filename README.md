# Todo List

Aplicação de exemplo de utilização do Redux.

## Estrutura

- SRC
  - HTML
    - template.html => "Template da aplicação".
  - REDUCERS
    - TODOS
      - action-creators.js => Funções que retornam o TYPE e o PAYLOAD de cada action do reducer a serem utilizadas pelo dispatch.
      - actions.js => Contém as constantes com os nomes das ações do reducer.
      - index.js => Reducer(state e action)
      - todos.test.js => Testes unitários dos reducers.
