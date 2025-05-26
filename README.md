# E-Commerce de Produtos Ortopédicos

Este projeto é um site de e-commerce especializado em produtos ortopédicos, desenvolvido com [Next.js](https://nextjs.org) e [Chakra UI](https://chakra-ui.com/). O site apresenta uma interface moderna e responsiva, com navegação fluida entre as seções e visualização detalhada dos produtos.

📂 **Repositório:** [GitHub](https://github.com/alexandre-henrique-rp/teste_e-commerce)

🚀 **Demo:** [Vercel](https://teste-e-commerce-kappa.vercel.app/)

## Funcionalidades

- **Design Responsivo:** Interface adaptável para dispositivos móveis e desktop
- **Navegação Intuitiva:** Sistema de menu com rolagem suave até as seções
- **Exibição de Produtos:** Visualização detalhada dos produtos com imagens e especificações
- **Filtros de Catálogo:** Sistema de filtros para encontrar produtos específicos
- **Carrossel de Produtos Relacionados:** Sugestões de produtos relacionados

## Estrutura do Projeto

```
src/
├── app/               # Estrutura de rotas do Next.js
│   └── (page)/        # Layout principal e páginas
├── components/        # Componentes reutilizáveis
│   ├── card/          # Cards de produtos
│   ├── Catalog/       # Catálogo de produtos com filtros
│   ├── content/       # Seção "Sobre" com informações da empresa
│   ├── detalhes/      # Detalhes dos produtos
│   ├── footer/        # Rodapé com informações de contato
│   ├── header/        # Cabeçalho com menu de navegação
│   ├── hero/          # Banner principal
│   ├── img_detalhe/   # Detalhes de imagens dos produtos
│   ├── more_products/ # Carrossel de produtos relacionados
│   ├── product/       # Componente principal de produto
│   └── video/         # Seção de vídeo do produto
```

## Navegação e Rotas do Menu

O site utiliza um sistema misto de navegação que combina:

1. **Navegação Entre Páginas:**
   - **Produtos:** Navega para `/hidrolight-neo` - página detalhada do produto

2. **Navegação por Rolagem Suave:**
   - **Sobre nós:** Rola até a seção "Sobre" na página inicial
   - **Contato:** Rola até o footer com informações de contato
   - **Catálogo:** Rola até a seção de catálogo de produtos

Se o usuário estiver em uma página diferente da inicial, o sistema redireciona para a página inicial com o hash correspondente (ex: `/#sobre`, `/#contato`, `/#catalogo`).

### Implementação da Navegação

A navegação inteligente é implementada através de funções JavaScript que verificam a página atual e decidem se devem rolar suavemente na mesma página ou redirecionar para outra página:

```tsx
const isHomePage = () => {
  return window.location.pathname === "/" || window.location.pathname === "";
};

const scrollToSection = (id) => {
  if (isHomePage()) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.location.href = `/#${id}`;
  }
};
```

## Tecnologias Utilizadas

- **Next.js (v15.3.1):** Framework React para renderização do lado do servidor
- **React (v19.1.0):** Biblioteca para construção de interfaces
- **Chakra UI (v2):** Biblioteca de componentes para design rápido e acessível
- **TypeScript (v5.8.3):** Superset JavaScript com tipagem estática
- **Framer Motion (v12.12.2):** Biblioteca para animações fluidas
- **React Icons (v5.5.0):** Pacote de ícones para React

## Como Iniciar o Projeto

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Personalização

O projeto utiliza o Chakra UI para estilização, com foco em classes reutilizáveis e CSS puro. Os principais elementos visuais incluem:

- Paleta de cores corporativas com destaque para tons de roxo (#80276C) e laranja (#E57200)
- Botões e cards estilizados de forma consistente
- Layout responsivo com Flexbox e Grid
- Efeitos visuais como gradientes e overlays

## Contribuição

Para contribuir com o projeto, siga as boas práticas de código:

- Utilize os princípios de Clean Code e SOLID
- Adicione comentários explicativos em novas funcionalidades
- Siga o padrão de commits semânticos

## Licença

Este projeto está sob a licença MIT.
