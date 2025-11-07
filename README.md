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
- Acesso ao repositório com permissões de escrita
- Chave SSH configurada no GitHub (para autenticação segura)

### Primeira Configuração

1. **Clone o repositório**
   ```bash
   git clone git@github.com:Mount-Church/mount-church.git
   cd mount-church
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

### Deploy para Produção

Para publicar as alterações no GitHub Pages, execute:

```bash
npm run deploy
```

Este comando irá:
1. Criar um build de produção otimizado
2. Fazer push automático da pasta `build` para o branch `gh-pages`
3. Publicar o site na URL: https://mount-church.github.io/mount-church/

### Atualizando o Site

Sempre que fizer alterações no código, siga estes passos:

1. Faça commit das suas alterações
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push origin main
   ```

2. Faça o deploy da nova versão
   ```bash
   npm run deploy
   ```

### Configuração do Ambiente

Copie o arquivo `.env.example` para `.env` e atualize as variáveis conforme necessário.

### Notas Importantes

- O branch `gh-pages` é gerado automaticamente - não faça commits diretamente nele
- O site pode levar alguns minutos para atualizar após o deploy
- Verifique o log de deploy em caso de erros

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
