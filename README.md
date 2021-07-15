# 번역 서비스

## 기능들

- [ ] 구글 번역
- [ ] 파파고 번역
- [ ] 엔터 및 주석 제거

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

## Deploying to Heroku

- Heroku는 간단하게 무료로 호스팅 할 수 있도록 해주는 서비스이다.

- package.json 안에 아래 내용을 추가한다.

```json
"heroku-postbuild": "npm install && npm install --only=dev --no-shrinkwrap && npm run build"
```

- [Heroku 사이트](https://dashboard.heroku.com/)를 접속하여 계정을 생성하고 로그인한다.
- **create a new app** 한 후 Deploy 탭을 선택한다.
- GitHub 계정을 연결 한 후 Manual deploy 한다.