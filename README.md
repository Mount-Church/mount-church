# Mount Church - Website

[![GitHub license](https://img.shields.io/github/license/Mount-Church/mount-church)](https://github.com/Mount-Church/mount-church/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Mount-Church/mount-church)](https://github.com/Mount-Church/mount-church/issues)

Website oficial da Mount Church, construído com React e TypeScript.

## 🚀 Implantação

Este projeto está configurado para ser implantado no GitHub Pages. Siga os passos abaixo para fazer o deploy:

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn
- Git

### Passos para Implantação

1. **Instale as dependências**
   ```bash
   npm install
   ```

2. **Crie um build de produção**
   ```bash
   npm run build
   ```

3. **Faça o deploy para o GitHub Pages**
   ```bash
   npm run deploy
   ```
   Este comando irá:
   - Criar um build de produção
   - Fazer push da pasta `build` para o branch `gh-pages`
   - Publicar o site na URL configurada no campo `homepage` do package.json

### Configuração do Ambiente

Copie o arquivo `.env.example` para `.env` e atualize as variáveis conforme necessário.

## 🛠 Desenvolvimento

No diretório do projeto, você pode executar:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle-sized deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
