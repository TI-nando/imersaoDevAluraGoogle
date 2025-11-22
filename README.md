# Base de Conhecimento de Linguagens e Frameworks

Um catálogo interativo e responsivo de linguagens de programação e frameworks, com busca rápida, logos oficiais, tema escuro e visual moderno.

## Visão Geral

- Exibe linguagens e frameworks em boxes organizadas lado a lado usando `CSS Grid`.
- Busca por nome e descrição com um campo de pesquisa de alta visibilidade e ícone de lupa.
- Logos oficiais priorizadas, com fallback automático para outras fontes quando necessário.
- Tema escuro consistente com gradiente azul/preto inspirado na Alura.
- Fundo com animação sutil reativo ao cursor, mantendo boa performance.
- Layout responsivo, adaptado para desktop e mobile.
- Cabeçalho fixo (sticky) e rodapé com créditos e ícones sociais.

## Principais Funcionalidades

- Catálogo dividido em duas seções: `Linguagens` e `Frameworks`.
- Renderização das logos com fallback em etapas para evitar imagens quebradas.
- Limite de no máximo `50` itens exibidos por seção para manter a leitura.
- Busca client-side por nome e descrição, sem recarregar a página.
- Design responsivo com grid fluido e componentes acessíveis.

## Como Usar

- Abra o arquivo `index.html` diretamente no navegador.
- Alternativamente, sirva os arquivos como um site estático (qualquer servidor http simples funciona).
  - Exemplos comuns: extensões de servidor estático no VS Code (Live Server), ou qualquer servidor local.

## Estrutura do Projeto

- `index.html` — Estrutura da página e pontos de montagem das seções.
- `src/css/style.css` — Estilos globais, grid, tema escuro, fundo animado e responsividade.
- `src/js/script.js` — Busca, renderização das boxes, lógica de logos com fallback e eventos.
- `data.json` — Fonte de dados com linguagens e frameworks (nome, descrição, ano, link, tags e, opcionalmente, logo).

## Dados e Modelagem

Cada item segue o formato:

```json
{
  "nome": "Exemplo",
  "descricao": "Texto descritivo do item",
  "data_criacao": "AAAA",
  "link": "https://exemplo.com/",
  "logo": "https://url-da-logo.svg",
  "tags": ["linguagem"]
}
```

- Use `tags` contendo `"linguagem"` para linguagens e `"framework"` para frameworks.
- O campo `logo` é opcional; quando não informado, o projeto tenta buscar a logo de fontes conhecidas automaticamente.

## Logos Oficiais e Fallback

- O projeto prioriza URLs oficiais ou de provedores confiáveis.
- Caso a logo oficial não carregue (hotlink ou bloqueio), existe um fallback automático para outras fontes.
- Para nomes com variações (ex.: `Next.js`, `F#`, `C++`), há normalização e alias para resolver o slug correto.
- Recomenda-se incluir o campo `logo` no `data.json` com a URL oficial quando possível.

## Personalização Visual

- Paleta e tema: variáveis CSS em `:root` definem cores e gradientes do tema escuro.
- Grid: ajuste o tamanho mínimo das colunas das seções para controlar o layout.
- Logos: personalize o tamanho do contêiner (`.logo-wrap`) e da imagem (`.box-logo`) conforme o gosto.

## Desenvolvimento e Manutenção

- O projeto é estático e não depende de back-end.
- Modificações em `data.json` são refletidas na página ao recarregar o navegador.
- A lógica de busca e de logos está em `src/js/script.js`.

## Créditos

- Desenvolvido por Fernando Henrique Silva.

## Licença

- Projeto de uso educacional e demonstrativo.