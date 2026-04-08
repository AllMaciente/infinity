# Infinity - E-commerce de Geradores Magnéticos

Um projeto de e-commerce fictício para uma empresa de geradores de energia magnética, desenvolvido como projeto acadêmico.

## Tecnologias

- **Astro** - Framework web moderno
- **TailwindCSS** - Framework CSS utilitário
- **TypeScript** - Superset JavaScript tipado
- **JSON** - Fonte de dados estática

## Estrutura do Projeto

```
/src
├── components/          # Componentes reutilizáveis
│   ├── CartButton.astro
│   ├── CartDrawer.astro
│   ├── CategoryFilter.astro
│   ├── Footer.astro
│   ├── Navbar.astro
│   ├── Pagination.astro
│   ├── ProductCard.astro
│   ├── ProductGrid.astro
│   └── SearchBar.astro
├── data/               # Arquivos de dados JSON
│   ├── company.json     # Dados da empresa
│   └── products.json    # Catálogo de produtos
├── layouts/            # Layouts base
│   └── MainLayout.astro
├── pages/              # Rotas e páginas
│   ├── index.astro     # Página inicial
│   └── loja/
│       ├── index.astro # Catálogo de produtos
│       └── [slug].astro # Página de produto
├── styles/
│   └── global.css      # Estilos globais e variáveis CSS
└── utils/
    └── cart.ts         # Lógica do carrinho (localStorage)

/public
├── favicon.svg
└── products/           # Imagens de produtos
```

## Configuração

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:4321`

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera versão de produção |
| `npm run preview` | Visualiza versão de produção |
| `npm run astro` | Executa comandos Astro CLI |

## Personalização

### Alterar Dados da Empresa

Edite `/src/data/company.json` para modificar informações da empresa.

### Alterar Produtos

Edite `/src/data/products.json` para adicionar, remover ou modificar produtos.

### Cores e Tema

As cores são controladas por variáveis CSS em `/src/styles/global.css`:

```css
:root {
  --color-primary: #131313;
  --color-accent: #EDC531;
  --color-background: #F8F8F8;
  /* ... */
}
```

### Adicionar Imagens de Produtos

Coloque as imagens em `/public/products/` e referencie-as no JSON:

```json
{
  "image": "/products/minha-imagem.png"
}
```

## Funcionalidades

- [x] Página inicial com hero e produtos em destaque
- [x] Catálogo com busca e filtros por categoria
- [x] Paginação de produtos
- [x] Página individual de produto
- [x] Carrinho com localStorage
- [x] Design responsivo
- [x] Tema com variáveis CSS

## Marca: Infinity

**Infinity** é uma empresa fictícia especializada em geradores de fluxo magnético que se autobombeiam, utilizando física de indução eletromagnética e levitação magnética.

### Paleta de Cores

- **Primária:** #131313 (Preto)
- **Destaque:** #EDC531 (Amarelo)
- **Fundo:** #F8F8F8 (Off-white)
- **Cinzas:** #3C3C3C, #5D5D5D, #9D9D9D

### Tipografia

- **Red Hat Display** - Títulos e destaques
- **Poppins** - Corpo de texto

## Licença

Este é um projeto acadêmico. Todos os direitos reservados para fins educacionais.
