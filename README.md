# 🚀 mks-frontend-challenge

## 🛹 Overview
A frontend challenge using Vite + React and more...

O projeto foi criado utilizando Vite@latest e inclui styled-components, react-router-dom, framer-motion, além de outros pacotes para tornar a experiência e configuração mais acessíveis.

## 🌐 API Request
A requisição da API foi construída com react-query, responsável por implementar o conceito de SWR (stale while revalidate). Dessa forma, qualquer alteração que ocorrer no servidor será refletida automaticamente na tela, sem a necessidade de atualização. Esse conceito é ideal para aplicações como gerenciadores de conta e e-commerces, pois envolve transações em tempo real. Além disso, os dados são mantidos em cache por até 60s, evitando a necessidade de chamar a API nesse intervalo caso o usuário atualize a tela.

~~~sql 
--PS: para testar essa implementação, saia da aba da página, aguarde alguns segundos e depois volte. O skeleton que voce verá indica que o SWR está revalidando os dados em cache com os dados chamados do servidor, caso encontre algo que foi alterado diretamente no servidor, ele é autosuficiente para atualizar a informação na tela, sem a necessidade do usuário recaregar a página!
~~~

## ⚙️ Technical Choices
Optei por utilizar o React devido à sua simplicidade e efetividade em relação à modularização de código. Toda a parte de gerenciamento de estados, arrow functions e configuração inicial dos dados foi feita utilizando a Context API do React, tornando tudo mais gerenciável a longo prazo. 

~~~sql 
--PS: como item final, adicionei o salvamento dos itens do carrinho no local storage, isso somente para caso o usuário feche a página, seus itens ficaram salvos.
~~~

## 🎨 UX Libraries
Foram utilizadas algumas bibliotecas voltadas para UX, como o React Framer Motion, responsável pelas transições de slide in (out), e a biblioteca de notificações minimalistas, Toastify. Vale resaltar que o contrução dos estilos utilizando styled-components foi totalmente criada do zero. A biblioteca Material UI foi utilizada pra gerar os skeletons equanto os dados não são totalmente carregados ou nas chamadas de cache (ao sair e retornar para a página).

## 🚀 Deployment
Como serviço de deploy, utilizei o Netlify, onde é possível gerenciar todas as configurações do site.

## 🧪 Unit Testing
Em relação aos testes unitários, foram utilizados Jest e Testing-Library. A configuração deles junto ao Vite mostrou-se um pouco complexa, mas uma vez feita, dificilmente será esquecida.

## 🌐 Deploy Link
O deploy pode ser conferido [aqui](https://mks-sistemas-shop.netlify.app/loja).

## 📦 Principais Dependências

| Nome                      | Versão        | Link                                              |
|---------------------------|---------------|---------------------------------------------------|
| @mui/material             | ^5.14.17      | [Material-UI Documentation](https://mui.com/material-ui/getting-started/)              |
| @mui/styled-engine-sc     | ^6.0.0-alpha.5| [Material-UI Styled Engine Documentation](https://www.npmjs.com/package/@mui/styled-engine-sc) |
| axios                     | ^1.6.1        | [Documentation](https://axios-http.com/ptbr/docs/intro)         |
| framer-motion             | ^10.16.4      | [Documentation](https://www.npmjs.com/package/framer-motion)               |
| react-dom                 | ^18.2.0       | [React Documentation](https://pt-br.legacy.reactjs.org/docs/react-dom.html) |
| react-icons               | ^4.11.0       | [GitHub Repository](https://react-icons.github.io/react-icons/) |
| react-query               | ^3.39.3       | [Documentation](https://www.npmjs.com/package/react-query)         |
| react-router-dom          | ^6.18.0       | [Documentation](https://reactrouter.com/)|
| react-toastify            | ^9.1.3        | [Documentation](https://fkhadra.github.io/react-toastify/) |
| styled-components         | ^6.1.1        | [Documentation](https://www.styled-components.com/)        |

## ⚙️ Configuração do Projeto

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/mks-frontend-challenge.git
    ```

2. **Acesse o diretório do projeto:**
    ```bash
    cd mks-frontend-challenge
    ```

3. **Instale as dependências:**
    ```bash
    npm install
    ```

4. **Execute o projeto localmente:**
    ```bash
    npm run dev
    ```

5. **Execute os testes:**
    ```bash
    npm test
    ```

6. **Execute os testes em modo de observação (watch):**
    ```bash
    npm run test:watch
    ```

7. **Execute os testes com cobertura:**
    ```bash
    npm run test:coverage
    ```
