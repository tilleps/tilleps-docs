# Web Development

[[toc]]

## Essentials

- [x] Linting (eslint)
- [x] Formatting (prettier)
- [ ] Logging
- [ ] Frontend proxy to backend
- [ ] i18n / localization support
- [ ] https://github.com/jsdoc2md/jsdoc-to-markdown

### Frontend proxy to backend

```js:line-numbers
devServer: {
  historyApiFallback: false,
  proxy: {
    //  WORKS
    "/socket.io": {
      "target": `ws://127.0.0.1:${port}`,
      "ws": true
    },
    "^(?!/sockjs-node/|/socket.io/).*$": {
      changeOrigin: true,
      target: `http://127.0.0.1:${port}`
    }
  }
```

## Boiler Plate

- [ ] Frontend
  - [ ] Vue
  - [ ] React
- [ ] Backend
- [ ] Unit Testing
- [ ] Pre-commit hooks
- [ ] Localization

## Troubleshooting

This module is declared with 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.

tsconfig.json

```
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```

## Application Lifecycle

-
  1. Load environment variables
  - Connect to databases
-
  2. Load application config
-
  3. Startup dependencies
-
  4. Startup webserver
  - port

## Things to backup

- [ ] SequelAce connections
- [ ] Local MySQL database

## Security

- Test MySQL connectivity
- Ensure MySQL servers are only accessible from application servers / within VPC
