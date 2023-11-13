# 🚀 mks-frontend-challenge

## 🛹 Overview
A frontend challenge using Vite + React and more...

O projeto foi criado utilizando Vite@latest e inclui styled-components, react-router-dom, framer-motion, além de outros pacotes para tornar a experiência e configuração mais acessíveis.

## 🌐 API Request
A requisição da API foi construída com react-query, responsável por implementar o conceito de SWR (stale while revalidate). Dessa forma, qualquer alteração que ocorrer no servidor será refletida automaticamente na tela, sem a necessidade de atualização. Esse conceito é ideal para aplicações como gerenciadores de conta e e-commerces, pois envolve transações em tempo real. Além disso, os dados são mantidos em cache por até 60s, evitando a necessidade de chamar a API nesse intervalo caso o usuário atualize a tela.

## ⚙️ Technical Choices
Optei por utilizar o React devido à sua simplicidade e efetividade em relação à modularização de código. Toda a parte de gerenciamento de estados, arrow functions e configuração inicial dos dados foi feita utilizando a Context API do React, tornando tudo mais gerenciável a longo prazo.

## 🎨 UX Libraries
Foram utilizadas algumas bibliotecas voltadas para UX, como o React Framer Motion, responsável pelas transições de slide in (out), e a biblioteca de notificações minimalistas, Toastify. Vale resaltar que o contrução dos estilos utilizando styled-components foi totalmente criada do zero.

## 🚀 Deployment
Como serviço de deploy, utilizei o Netlify, onde é possível gerenciar todas as configurações do site.

## 🧪 Unit Testing
Em relação aos testes unitários, foram utilizados Jest e Testing-Library. A configuração deles junto ao Vite mostrou-se um pouco complexa, mas uma vez feita, dificilmente será esquecida.

## 🌐 Deploy Link
O deploy pode ser conferido [aqui](https://mks-sistemas-shop.netlify.app/loja).

## 📦 Principais Dependências

| Nome                      | Versão        |
|---------------------------|---------------|
| @emotion/react            | ^11.11.1      |
| @emotion/styled           | ^11.11.0      |
| @mui/material             | ^5.14.17      |
| @mui/styled-engine-sc     | ^6.0.0-alpha.5|
| axios                     | ^1.6.1        |
| framer-motion             | ^10.16.4      |
| react                     | ^18.2.0       |
| react-dom                 | ^18.2.0       |
| react-icons               | ^4.11.0       |
| react-query               | ^3.39.3       |
| react-router-dom          | ^6.18.0       |
| react-toastify            | ^9.1.3        |
| styled-components         | ^6.1.1        |

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
