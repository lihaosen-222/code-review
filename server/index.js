const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const http = require('http')
const app = new Koa()
const routerInit = require('./router')

const server = http.createServer(app.callback())

app.use(koaStatic(path.join(__dirname, '/public')))
routerInit(app)

const PORT = 8008
server.listen(PORT, () => {
  console.log(`run at http://localhost:${PORT}`)
})
