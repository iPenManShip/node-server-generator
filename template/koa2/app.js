const Koa = require('koa')
const Static = require('koa-static')
const Path = require('path')
const KoaBody = require('koa-body')
const Cors = require('@koa/cors')
const OnError = require('koa-onerror')
const Router = require('./routes/index')
const app = new Koa()

OnError(app)
app.use(Static(Path.join(__dirname, '/public')))
app.use(KoaBody())
app.use(Cors())
app.use(Router.routes())
module.exports = app
