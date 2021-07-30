# 번역 서비스

## 기능들

- [ ] 엔터 및 주석 제거
- [ ] 구글 번역
- [ ] 파파고 번역

## Packages

```bash
// client
yarn add prop-types
yarn add react-router-dom
yarn add styled-components
yarn add styled-reset
yarn add react-bootstrap bootstrap
yarn add react-textarea-autosize
yarn add axios
yarn add copy-to-clipboard

// server
yarn add nodemon
yarn add request
yarn add @k3rn31p4nic/google-translate-api
```

## React Bootstrap

```js
// 추가해야 함.
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
```

## 별도의 Proxy 연결

```bash
npm i --save http-proxy-middleware
```

setupProxy.js 파일을 생성하고 아래 코드를 작성한다.

```js
const { createProxyMiddleware } = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app){
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://paper-translation-service.herokuapp.com',
            changeOrigin: true
        })
    )
  };
```

## Deploying to Heroku

- Heroku는 간단하게 무료로 호스팅 할 수 있도록 해주는 서비스이다.

- package.json 파일의 "script" 항목 아래 내용을 추가한다.

```json
"heroku-postbuild": "npm install && npm install --only=dev --no-shrinkwrap && npm run build"
```

- [Heroku 사이트](https://dashboard.heroku.com/)를 접속하여 계정을 생성하고 로그인한다.
- **create a new app** 한 후 Deploy 탭을 선택한다.
- GitHub 계정을 연결 한 후 Manual deploy 한다.

## Deploying to Github Pages

```bash
npm i gh-pages
or
yarn add gh-pages
```

1. package.json -> "homepage": "https://hgko1207.github.io/paper-translation/" 변경
2. package.json -> "scripts" -> "deploy": "gh-pages -d build", "predeploy": "npm run build" 추가
3. npm run deploy 실행
